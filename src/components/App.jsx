
import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Саньок Пиво', number: '459-12-56' },
      { id: 'id-2', name: 'Колян Лопата', number: '443-89-12' },
      { id: 'id-3', name: 'Толян Газель', number: '645-17-79' },
      { id: 'id-4', name: 'Приват Банк', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate() {
  const { contacts } = this.state;
  localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  componentDidMount() {
  const storedContacts = localStorage.getItem('contacts');
  if (storedContacts) {
    try {
      this.setState({ contacts: JSON.parse(storedContacts) });
    } catch (error) {
      console.error('Error parsing stored contacts:', error);
    }
  }
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
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
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleSearch = (value) => {
    this.setState({ filter: value });
  };

  handleDelete = (index) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact, i) => i !== index),
    }));
  };


  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleSearch={this.handleSearch} />
        <ContactList contacts={filteredContacts} handleDelete={this.handleDelete} />
      </div>
    );
  }
}