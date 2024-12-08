import { fetchEmailsSuccess } from './EmailsAction';

export const fetchEmails = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/Api/EMail/GetInbox');
      const threads = await response.json();
      dispatch(fetchEmailsSuccess(threads));
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };
};
