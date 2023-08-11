import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Саньок Пиво', number: '459-12-56' },
    { id: 'id-2', name: 'Колян Лопата', number: '443-89-12' },
    { id: 'id-3', name: 'Толян Газель', number: '645-17-79' },
    { id: 'id-4', name: 'Приват Банк', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      try {
        setContacts(JSON.parse(storedContacts));
      } catch (error) {
        console.error('Error parsing stored contacts:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert('Contact already exists!');
    } else {
      const newContact = {
        name: name,
        number: number,
      };
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };

  const handleSearch = (value) => {
    setFilter(value);
  };

  const handleDelete = (index) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact, i) => i !== index)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleSearch={handleSearch} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
};

export default App;