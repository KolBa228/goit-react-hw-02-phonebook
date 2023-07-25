import PropTypes from 'prop-types';

export default function ContactItem({ contact, handleDelete }) {
  return (
    <li>
      Name: {contact.name}, Number: {contact.number}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};