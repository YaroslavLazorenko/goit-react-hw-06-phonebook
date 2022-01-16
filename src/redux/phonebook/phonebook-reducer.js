import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-actions';
// import { load } from '../../services/storage-api';

// const contacts = load('contacts');
// const initialItemsState = contacts ? contacts : [];
const initialItemsState = [];
const initialFilterState = '';

const itemsReducer = createReducer(initialItemsState, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer(initialFilterState, {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items: itemsReducer, filter: filterReducer });
