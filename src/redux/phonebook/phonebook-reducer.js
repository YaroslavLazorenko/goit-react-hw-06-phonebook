import { combineReducers } from 'redux';
import types from './phonebook-types';
import { load } from '../../services/storage-api';

const contacts = load('contacts');
const initialItemsState = contacts ? contacts : [];
const initialFilterState = '';

const itemsReducer = (state = initialItemsState, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    case types.DELETE:
      return [...state.filter(({ id }) => id !== payload)];
    default:
      return state;
  }
};

const filterReducer = (state = initialFilterState, { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

const contactsReducer = combineReducers({ items: itemsReducer, filter: filterReducer });

export default combineReducers({ contacts: contactsReducer });
