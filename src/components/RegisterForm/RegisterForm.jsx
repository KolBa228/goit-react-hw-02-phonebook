import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { redirect } from "react-router-dom";
import { registerThunk } from '../../redux/authThunk';
import { RegBtn, RegInput, RegForm } from './RegisterStyled';

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
            <RegForm onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
                <label>
                    <p>Name</p>
                    <RegInput
                        required
                         type="name" name="name" />
                </label>
                <label>
                    <p>Email</p>
                    <RegInput
                        required
                         type="email" name="email" />
                </label>
                <label>
                    <p>Password</p>
                    <RegInput required
                        minLength="7"
                         type="password" name="password" />
                </label>
                <RegBtn type="submit">Register</RegBtn>
            </RegForm>
        </>
    );
};