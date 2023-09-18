import React from 'react'
import { useSelector } from 'react-redux';
import { Title, Container, HomeLink } from './HomeStyled';

export const Home = () => {
    const username = useSelector(state => state.auth.name)
    return (
        <main>
            <Container>
                <Title>Create your own contacts list</Title>
                {username ? (
                    <div>
                        <HomeLink to="/contacts">Open contacts</HomeLink>
                    </div>
                ) : (
                    null
                )}

            </Container>
        </main>

    )
}