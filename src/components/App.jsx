import React from 'react';

export class App extends React.Component {
  state = {
    contacts: [
    { id: 'id-1', name: 'Саньок Пиво', number: '459-12-56' },
    {id: 'id-2', name: 'Колян Лопата', number: '443-89-12'},
    {id: 'id-3', name: 'Толян Газель', number: '645-17-79'},
    { id: 'id-4', name: 'Приват Банк', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number, contacts } = this.state;

    const existingContact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());

    if (existingContact) {
      alert(`НУ НЕ ТРЕБА ВОНО ТОБІ`);
    } else {
      const newContact = {
        name: name,
        number: number,
      };
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }));
    }
  };

  handleSearch = (e) => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  handleDelete = (index) => {
    const updatedContacts = [...this.state.contacts];
    updatedContacts.splice(index, 1);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const { filter, contacts } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div
        style={{
          height: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h1>Name</h1>
        <form
          onSubmit={this.handleSubmit}
          style={{
            height: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 30,
            color: '#010101',
            gap: '20px',
          }}
        >
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts:</h2>
          <input
            type="text"
            placeholder="Search by name"
            onChange={this.handleSearch}
            value={filter}
          />
          <ul>
            {filteredContacts.map((contact, index) => (
              <li key={index}>
                Name: {contact.name}, Number: {contact.number}
                <button onClick={() => this.handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
