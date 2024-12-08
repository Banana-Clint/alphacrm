import {
  FETCH_CLIENT_DATA_REQUEST,
  FETCH_CLIENT_DATA_SUCCESS,
  FETCH_CLIENT_DATA_FAILURE,
} from './ClientsAction';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENT_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_CLIENT_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case FETCH_CLIENT_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export  {clientsReducer};
