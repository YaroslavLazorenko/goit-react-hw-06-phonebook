import { PropTypes } from 'prop-types';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.css';
import { connect } from 'react-redux';

const App = ({ contacts }) => {
  return (
    <div className="App">
      <h1 className="phonebookTitle">Phonebook</h1>
      <ContactForm />

      <h2 className="contactsTitle">Contacts</h2>
      <Filter />
      {contacts.length !== 0 && <ContactList />}
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(App);
