import { useDispatch } from 'react-redux';
import { redirect } from 'react-router-dom';
import { loginThunk } from 'redux/authThunk';
import { LogForm, LogInput, LogBtn } from './LoginStyled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    dispatch(loginThunk(userData))
      .then(redirect('/'));
  };

  return (
    <LogForm onSubmit={handleSubmit} >
      <label>
        <p>Email</p>
        <LogInput type="email" name="email" />
      </label>
      <label>
        <p>Password</p>
        <LogInput type="password" name="password" />
      </label>
      <LogBtn type="submit">Log In</LogBtn>
    </LogForm>
  );
};