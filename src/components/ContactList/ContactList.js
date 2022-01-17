import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { getContactsItems, getContactsFilter } from '../../redux/phonebook/phonebook-selectors';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContactsItems);
  const filter = useSelector(getContactsFilter);

  return (
    <ul className={s.list}>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map(contact => {
          return <ContactItem contact={contact} key={contact.name} />;
        })}
    </ul>
  );
};

export default ContactList;
