import React from 'react'
import ContactForm from 'components/ContactForm/ContactForm'
import ContactList from 'components/ContactList/ContactList'
import { Filter } from 'components/Filter/Filter'
import { Container } from 'pages/Home/HomeStyled'

export const Contacts = () => {
    return (
        <main>
            <Container>
                <h2>Contacts</h2>
                <ContactForm />
                <Filter />
                <ContactList />
            </Container>          
        </main>
    )
};

