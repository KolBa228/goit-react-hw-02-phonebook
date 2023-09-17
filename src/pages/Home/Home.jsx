import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Title, Container } from './HomeStyled';

export const Home = () => {
    const username = useSelector(state => state.auth.name)
    return (
        <main>
            <Container>
                <Title>Create your very own contacts list!</Title>
                {username ? (
                    <div>
                        <Link to="/contacts">Open contacts</Link>
                    </div>
                ) : (
                    null
                )}

            </Container>
        </main>

    )
}