import { configureStore } from '@reduxjs/toolkit';
import {emailsReducer} from './User/EmailsReducer';
import { clientsReducer } from './Clients/ClientsReducer';

export const store = configureStore({
  reducer: {
    emails: emailsReducer,
    clients: clientsReducer
  },
});
