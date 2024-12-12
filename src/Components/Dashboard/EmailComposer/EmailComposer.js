import React, { useState, Suspense } from 'react';
import './EmailComposer.css';
import EmailForm from './EmailForm/EmailForm';
import AIToggle from './AIToggle/AIToggle';

// Lazy load the EmailCatalog component
const EmailCatalog = React.lazy(() => import('../ClientData/EmailCatalog'));

export const EmailComposer = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [isCatalogVisible, setIsCatalogVisible] = useState(false);
  const [aiMessage, setAIMessage] = useState('');
  const [userInfo,setUserInfo]=useState(null);
  const [isAIGenerating,setIsAIGenerating]=useState(false)
  const [aiSubject,setAISubject]=useState('')
  const [to, setTo] = useState('');
  const [isLoading,setIsLoading]=useState(false)
  const handleToggleCatalog = () => {
    setIsCatalogVisible(!isCatalogVisible);
  };


  return (
    <div className="email-composer">
      <h2>Compose Email</h2>

      <AIToggle  setAIMessage={setAIMessage}
      setAISubject={setAISubject} 
      isAIGenerating={isAIGenerating} 
      setIsAIGenerating={setIsAIGenerating} 
      userInfo={userInfo}
      to={to} />

      <EmailForm  setResponseMessage={setResponseMessage}
       handleToggleCatalog={handleToggleCatalog}
       isCatalogVisible={isCatalogVisible}
       isAIGenerating={isAIGenerating}
       aiMessage={aiMessage}
       setAIMessage={setAIMessage}
       aiSubject={aiSubject}
       setAiSubject={setAISubject}
       userInfo={userInfo}
       to={to}
       setTo={setTo}
       />
      {responseMessage && <p className="response-message">{responseMessage}</p>}
      {isCatalogVisible && (
        <Suspense fallback={<p>Loading catalog...</p>}>
          <EmailCatalog 
           onClose={handleToggleCatalog}
           setUserInfo={setUserInfo} />
        </Suspense>
      )}
    </div>
  );
};
