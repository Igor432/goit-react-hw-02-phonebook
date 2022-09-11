import ContactElement from './ContactElements';
import style from '../phonebook/phonebook.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ Contacts, filterValue, onDelete }) => {
  let filteredContact = Contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className={style.contacts}>
      <ul className={style.contacts_list}>
        {filteredContact.map(filcontact => (
          <ContactElement
            key={filcontact.id}
            contact={filcontact}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  Contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  filterValue: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
