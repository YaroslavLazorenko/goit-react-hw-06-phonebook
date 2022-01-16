import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts, filter }) => {
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

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

export default connect(mapStateToProps)(ContactList);
