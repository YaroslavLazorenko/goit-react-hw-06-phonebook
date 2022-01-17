import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { getContactsItems } from './redux/phonebook/phonebook-selectors';
import './App.css';

const App = () => {
  const contacts = useSelector(getContactsItems);

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

export default App;
