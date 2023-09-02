import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { useDispatch } from 'react-redux';
import { deleteContact, setContacts, setFilter } from '../redux/store';

export const App = () => {
  const dispatch = useDispatch();

  const addContact = newContact => {
    dispatch(setContacts(newContact));
  };

  const handleFilterChange = value => {
    dispatch(setFilter(value));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter handleSearch={handleFilterChange} />
      <ContactList handleDelete={handleDeleteContact} />
    </div>
  );
};