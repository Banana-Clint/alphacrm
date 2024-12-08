import { fetchClientDataSuccess } from './ClientsAction';

export const fetchClients = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/Api/Client/Clients');
      const clients = await response.json();
      console.log(clients)
      dispatch(fetchClientDataSuccess(clients));
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };
};
