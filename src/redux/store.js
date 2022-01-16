import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
// import throttle from 'lodash.throttle';
import contactsReducer from './phonebook/phonebook-reducer';
// import { save } from '../services/storage-api';

// const STATE_SAVING_DELAY = 1000;
const isDevelopment = process.env.NODE_ENV === 'development';
const middleware = isDevelopment ? [...getDefaultMiddleware(), logger] : null;

const store = configureStore({
  reducer: { contacts: contactsReducer },
  devTools: isDevelopment,
  middleware,
});

// store.subscribe(
//   throttle(() => save('contacts', store.getState().contacts.items), STATE_SAVING_DELAY),
// );

export default store;
