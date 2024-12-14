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
      setIsLoading(true); // Indicate that the process has started
   
      const AiEmail = await AIGenerate(
        aiPrompt || "The user did not add a prompt use the most recent metadata or mails if available ", // Use an empty string if aiPrompt is falsy
        userInfo?.id || "", // Use an empty string if userInfo or userInfo.id is undefined
        userInfo?.client_email || to, // Default to 'to' if client_email is unavailable
        setIsLoading // Pass the function as is
      );
      console.log(AiEmail)
      // Update state with the generated email content
      setAIMessage(AiEmail.body);
      setAISubject(AiEmail.subject);
      setIsAIGenerating(true);
    } catch (error) {
      console.error('Error generating email:', error.message);
      alert('Error generating email. Please try again.');
    } finally {
      setIsLoading(false); // Ensure loading state is reset
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
