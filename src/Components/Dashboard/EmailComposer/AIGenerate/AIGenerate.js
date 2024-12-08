import axios from 'axios';

const AIGenerate = async (prompt,clientId,clientAddress) => {
  try {
    const response = await axios.post('http://localhost:3001/Api/EMail/GenerateEmail', {
      clientId: clientId || '',
      textPrompt: prompt ||'',
      emailAddress: clientAddress ||''
  
    });
    return response.data.emailContent;
  } catch (err) {
    console.error('Error generating email content:', err.message);
    return '';
  }
};

export default AIGenerate;
