import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { delContactThunk, getContactThunk } from '../../redux/contactThunk';
import {ContactLi} from './ContactListStyled';

const ContactList = () => {
  const dispatch = useDispatch();
  const filtered = useSelector((state) => state.filter.filtered);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    dispatch(getContactThunk(token));
  }, [dispatch, token]);

  const handleRemoveContact = (id) => {
    dispatch(delContactThunk({ id, token }));
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