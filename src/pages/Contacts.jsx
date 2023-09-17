import React from 'react'
import ContactForm from 'components/ContactForm/ContactForm'
import ContactList from 'components/ContactList/ContactList'
import Filter from 'components/Filter/Filter'

export const Contacts = () => {
    return (
        <main>
            <ContactForm />
            <h2 style={{ textAlign: 'center' }}>Contacts</h2>
            <Filter />
            <ContactList />
        </main>
    )
};

