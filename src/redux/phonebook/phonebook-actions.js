import { nanoid } from 'nanoid';
import types from './phonebook-types';

export const addContact = (name, number) => ({
  type: types.ADD,
  payload: { id: nanoid(), name, number },
});

export const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

export const changeFiler = value => ({ type: types.CHANGE_FILTER, payload: value });
