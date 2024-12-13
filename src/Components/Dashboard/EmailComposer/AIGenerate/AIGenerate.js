import axios from 'axios';

const AIGenerate = async (prompt, clientId, clientAddress, setIsLoading) => {
  setIsLoading(true); // Start loading state
  try {
    const response = await axios.post('https://crmapi-657550777490.us-central1.run.app/Api/EMail/GenerateEmail', {
      clientId: clientId || '',
      textPrompt: prompt || '',
      emailAddress: clientAddress || ''
    });

    return response.data.emailContent; // Return email content on success
  } catch (err) {
    console.error('Error generating email content:', err.message);
    return ''; // Return empty string on error
  } finally {
    setIsLoading(false); // Always stop loading state
  }
};

export default AIGenerate;
