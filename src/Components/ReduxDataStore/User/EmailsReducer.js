import { FETCH_EMAILS_SUCCESS } from './EmailsAction';

const initialState = {
  threads: [],
};

export const emailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMAILS_SUCCESS:
      return {
        ...state,
        threads: action.payload,
      };
    default:
      return state;
  }
};
