import React, { useState } from 'react';
import AIGenerate from '../AIGenerate/AIGenerate';
import './AIToggle.css';

const AIToggle = ({
  setAIMessage,
  setAISubject,
  isAIGenerating,
  setIsAIGenerating,
  userInfo = {},  
  to = '',
  setIsLoading
}) => {
  const [aiPrompt, setAIPrompt] = useState('');

  const handleToggleAIGeneration = () => {
    setIsAIGenerating(!isAIGenerating);
    setAIPrompt('');
  };

  const generateEmail = async () => {
    try {
      setIsLoading(true);

      // Validate inputs to handle falsy and empty values
      const prompt = aiPrompt?.trim() || '';
      const userId = userInfo?.id || '';
      const clientEmail = userInfo?.client_email || to;


      const AiEmail = await AIGenerate(prompt, userId, clientEmail, setIsLoading);
      setAIMessage(AiEmail?.body || '');
      setAISubject(AiEmail?.subject || '');
      setIsAIGenerating(true);
    } catch (error) {
      console.error('Error generating email:', error.message);
      alert('Error generating email. Please try again.');
    } finally {
      setIsLoading(false);
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
          />
          <button className="ai-toggle-button" onClick={generateEmail}>
            Generate
          </button>
        </>
      )}
      <button type="button" onClick={handleToggleAIGeneration} className="ai-toggle-button">
        {isAIGenerating ? 'to Manual' : 'Switch to AI Generate'}
      </button>
    </div>
  );
};

export default AIToggle;
