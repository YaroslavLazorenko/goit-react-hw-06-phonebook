import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import throttle from 'lodash.throttle';
import reducer from './phonebook/phonebook-reducer';
import { save } from '../services/storage-api';

const STATE_SAVING_DELAY = 1000;

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

store.subscribe(
  throttle(() => save('contacts', store.getState().contacts.items), STATE_SAVING_DELAY),
);

export default store;
