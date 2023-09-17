import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const LoginedPath = ({ component }) => {
    const username = useSelector(state => state.auth.name)
    if (!username) {
        return <Navigate to={'/login'} />
    }

    return component;
};