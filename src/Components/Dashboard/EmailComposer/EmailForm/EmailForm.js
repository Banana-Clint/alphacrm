import React, { useState, useEffect } from 'react';



const EmailForm = ({ setResponseMessage, handleToggleCatalog,isCatalogVisible,isAIGenerating,aiMessage,setAIMessage,aiSubject,setAiSubject,userInfo,to,setTo}) => {

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => { if (userInfo) { setTo(userInfo.email); } }, [userInfo]);



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://alphaapi-657550777490.us-central1.run.app/Api/Email/SendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to, subject, message: isAIGenerating ? aiMessage : message }),
      });

      const data = await response.json();
      setResponseMessage(data.message || 'Email sent successfully!');
    } catch (error) {
      setResponseMessage(`Error sending email: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="to">Send To:</label>
        <input
          type="email"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
        <button type="button" onClick={handleToggleCatalog} className="catalog-button">
          {isCatalogVisible ? 'Hide Catalog' : 'Show Client Catalog'}
        </button>
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={isAIGenerating?aiSubject:subject}
          onChange={isAIGenerating?(e) => setAiSubject(e.target.value)
            :(e)=>setSubject(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={isAIGenerating?aiMessage:message}
          onChange={(e) => isAIGenerating ? setAIMessage(e.target.value) : setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
