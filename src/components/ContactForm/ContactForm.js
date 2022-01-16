import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import s from './ContactForm.module.css';

const INITIAL_FORM_LOCAL_STATE = { name: '', number: '' };

const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName(INITIAL_FORM_LOCAL_STATE.name);
    setNumber(INITIAL_FORM_LOCAL_STATE.number);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error('Unknown input field name');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isContactAlreadySaved = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isContactAlreadySaved) {
      alert(`${name} is already in contacts.`);
      return;
    }

    addContact(name, number);
    resetForm();
  };

  return (
    <form className={s.form} action="#" onSubmit={handleSubmit}>
      <label className={s.label} htmlFor="name">
        Name:
      </label>
      <input
        className={s.inputField}
        id="name"
        type="text"
        name="name"
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      <label className={s.label} htmlFor="number">
        Number:
      </label>
      <input
        className={s.inputField}
        id="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        placeholder="Enter phone"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ contacts: state.contacts.items });

const mapDispatchToProps = dispatch => {
  return {
    addContact: (name, number) => dispatch(actions.addContact(name, number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
