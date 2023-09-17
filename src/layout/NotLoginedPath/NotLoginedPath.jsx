import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const NotLoginedPath = ({ component, redirectTo }) => {
  const username = useSelector(state => state.auth.name)
  if (!username) {
    return component;
  }

  return < Navigate to={redirectTo} />;
};