import { useDispatch } from 'react-redux';
import { redirect } from 'react-router-dom';
import { loginThunk } from 'redux/authThunk';

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
    <form onSubmit={handleSubmit} >
      <label>
        <p>Email</p>
        <input type="email" name="email" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};