import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container } from './Home/HomeStyled';

export const LoginPage = () => {
    return (
        <Container>
            <title>Login</title>
            <LoginForm />
        </Container>
    );
};