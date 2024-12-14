import React, { useState } from 'react';
import AIGenerate from '../AIGenerate/AIGenerate';
import './AIToggle.css'

const AIToggle = ({ setAIMessage, setAISubject, isAIGenerating, setIsAIGenerating, userInfo,to,setIsLoading }) => {
  const [aiPrompt, setAIPrompt] = useState('');

  const handleToggleAIGeneration = () => {
    setIsAIGenerating(!isAIGenerating);
    setAIPrompt('');
  };

  const generateEmail = async () => {
    try {
      setIsLoading(true)
      const AiEmail = await AIGenerate(aiPrompt?aiPrompt:"", 
        userInfo?userInfo.id:"",userInfo?userInfo.client_email:to,setIsLoading);
      setAIMessage(AiEmail.body);
      setAISubject(AiEmail.subject);
      setIsAIGenerating(true);
    } catch (error) {
      console.error('Error generating email:', error.message);
      alert('Error generating email. Please try again.');
    }
  };

  return (
    <div className="ai-toggle-container">
      {isAIGenerating && (
        <>
          <textarea
            className="ai-message-input"
            value={aiPrompt}
            onChange={(e) => setAIPrompt(e.target.value)}
            placeholder="AI-generated message"
            required
          />
          <button className="ai-toggle-button" onClick={generateEmail}>Generate</button>
        </>
      )}
      <button type="button" onClick={handleToggleAIGeneration} className="ai-toggle-button">
        {isAIGenerating ? 'to Manual' : 'Switch to AI Generate'}
      </button>
    </div>
  );
};

export default AIToggle;
