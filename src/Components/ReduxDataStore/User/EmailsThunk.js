import { fetchEmailsSuccess } from './EmailsAction';

export const fetchEmails = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://crmapi-657550777490.us-central1.run.app/Api/EMail/GetInbox');
      const threads = await response.json();
      dispatch(fetchEmailsSuccess(threads));
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };
};
