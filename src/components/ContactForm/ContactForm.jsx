import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/contactThunk';
import { AddInput, AddForm, AddBtn } from './ContactFormStyled.';

const ContactForm = () => {
const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });
  const contacts = useSelector(state => state.contacts.contacts)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      contacts.find(
        contacts => contacts.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert('Contact already exists!');
    } else {
      dispatch(addContactThunk({ contact }))
    }

  };

  return (
    <AddForm onSubmit={onSubmit}>
      <p>Name</p>
      <AddInput
        type="text"
        name="name"
        placeholder="Enter name"
        value={contact.name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <p>Number</p>
      <AddInput
        type="tel"
        name="number"
        placeholder="Enter phone number"
        value={contact.number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <AddBtn type="submit">Add contacts</AddBtn>
    </AddForm>
  );
};

export default ContactForm;
