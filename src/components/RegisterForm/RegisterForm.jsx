import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { redirect } from "react-router-dom";
import { registerThunk } from 'redux/authThunk';

export const RegisterForm = () => {
    const [error, setError] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = async event => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }
        try {
            dispatch(registerThunk(userData))
            redirect("/contacts")
        } catch (error) {
            setError('something gone wrong, try f5 and use another email')
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
                <label>
                    <p>Name</p>
                    <input
                        required
                         type="name" name="name" />
                </label>
                <label>
                    <p>Email</p>
                    <input
                        required
                         type="email" name="email" />
                </label>
                <label>
                    <p>Password</p>
                    <input required
                        minLength="7"
                         type="password" name="password" />
                </label>
                <button type="submit">Register</button>
            </form>
        </>
    );
};