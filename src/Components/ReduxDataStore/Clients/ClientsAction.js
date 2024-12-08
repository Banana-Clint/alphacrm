export const FETCH_CLIENT_DATA_REQUEST = 'FETCH_CLIENT_DATA_REQUEST';
export const FETCH_CLIENT_DATA_SUCCESS = 'FETCH_CLIENT_DATA_SUCCESS';
export const FETCH_CLIENT_DATA_FAILURE = 'FETCH_CLIENT_DATA_FAILURE';

export const fetchClientDataRequest = () => ({
  type: FETCH_CLIENT_DATA_REQUEST,
});

export const fetchClientDataSuccess = (clients) => ({
  type: FETCH_CLIENT_DATA_SUCCESS,
  payload: clients,
});

export const fetchClientDataFailure = (error) => ({
  type: FETCH_CLIENT_DATA_FAILURE,
  payload: error,
});
