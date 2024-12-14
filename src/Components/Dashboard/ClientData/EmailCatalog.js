import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients } from '../../ReduxDataStore/Clients/ClientsThunk.js';
import './EmailCatalog.css';


//Returns A React Component Populated With Client Emails 
export default function EmailCatalog({ onClose, setUserInfo }) {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.data);
  const isLoading = useSelector((state) => state.clients.isLoading);
  const error = useSelector((state) => state.clients.error);

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading clients...</p>;
  }

  if (error) {
    return <p>Error loading clients: {error}</p>;
  }

  return (
    <div className="email-catalog">
      <div className="email-catalog-header">
        <h2>Client Emails</h2>
        <button onClick={onClose} className="close-button">X</button>
      </div>
      <div className="email-list">
        {clients.map((client) => (
          <button 
            key={client.id} 
            className="email-item"
            onClick={() => {setUserInfo(client);onClose()}}
          >
            {client.email}
          </button>
        ))}
      </div>
    </div>
  );
}
