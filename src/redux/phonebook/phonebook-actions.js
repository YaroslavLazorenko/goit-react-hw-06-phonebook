import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/add', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
export const deleteContact = createAction('phonebook/delete');
export const changeFiler = createAction('phonebook/changeFilter');
