import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/store';
import { deleteContact } from 'redux/slice';

const ContactList = () => {
  const [visibleContacts, setVisibleContacts] = useState([]);
  
  const dispatch = useDispatch();


  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleDeleteBtn = e => {
    handleDeleteContact(e.target.id);
  };

  useEffect(() => {
    localStorage.setItem('userContacts', JSON.stringify(contacts));

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    setVisibleContacts(filteredContacts);
  }, [contacts, filter]);

  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <li key={nanoid()}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button
              type="button"
              id={contact.id}
              onClick={handleDeleteBtn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;