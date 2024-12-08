import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmails } from "../../ReduxDataStore/User/EmailsThunk";
import './EmailReader.css'

export default function EmailsReader() {
  const dispatch = useDispatch();
  const threads = useSelector((state) => state.emails.threads);
  const [currentPage, setCurrentPage] = useState(1);
  const threadsPerPage = 50;

  useEffect(() => {
    dispatch(fetchEmails());
  }, [dispatch]);

  if (!threads) {
    return <p>Loading emails...</p>;
  }

  // Check if threads is an array
  if (!Array.isArray(threads)) {
    console.error('Expected threads to be an array but got:', threads);
    return <p>Error loading emails. Please try again later.</p>;
  }

  // Calculate the threads to display on the current page
  const indexOfLastThread = currentPage * threadsPerPage;
  const indexOfFirstThread = indexOfLastThread - threadsPerPage;
  const currentThreads = threads.slice(indexOfFirstThread, indexOfLastThread);

  // Pagination logic
  const totalPages = Math.ceil(threads.length / threadsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="Email-Reader-Wrapper">
      <h1>Your Email Threads</h1> <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      {currentThreads.map((thread) => (
        <div className="Email-Element-Wrapper" key={thread.id}>
          <h2>{thread.messages[0].subject}</h2>
          <p>From: {thread.messages[0].from}</p>
          {thread.messages.length > 1 && (
            <details>
              <summary >{thread.messages.length - 1} more message(s)</summary>
              {thread.messages.slice(1).map((msg) => (
                <div  className="Email-Element" key={msg.id}>
                  <p>From: {msg.from}</p>
                  <p>{msg.snippet}</p>
                </div>
              ))}
            </details>
          )}
        </div>
      ))}
     
    </div>
  );
}
