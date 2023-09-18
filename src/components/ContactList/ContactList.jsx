import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { delContactThunk, getContactThunk } from '../../redux/contactThunk';
import {ContactLi} from './ContactListStyled';

const ContactList = () => {
  const dispatch = useDispatch();
  const filtered = useSelector((state) => state.filter.filtered);
  useEffect(() => {
    dispatch(getContactThunk());
  }, [dispatch]);

  const handleRemoveContact = (id) => {
    dispatch(delContactThunk({ id }));
  };
  return (
    <>

      <ul>
        {filtered && filtered.map((contact) => (
          <ContactLi key={contact.id}>
            <span>
              {contact.name} - {contact.number}
            </span>
            <button onClick={() => handleRemoveContact(contact.id)}>Delete</button>
          </ContactLi>
        ))}
      </ul>
    </>
  );
}

export default ContactList;