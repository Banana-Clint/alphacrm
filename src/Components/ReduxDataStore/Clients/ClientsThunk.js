import { fetchClientDataSuccess } from './ClientsAction';

export const fetchClients = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://crmapi-657550777490.us-central1.run.app/Api/Client/Clients');
      const clients = await response.json();
      dispatch(fetchClientDataSuccess(clients));
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };
};
