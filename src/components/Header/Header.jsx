import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logoutThunk } from 'redux/authThunk';

export const Header = () => {

    const dispatch = useDispatch()
    const username = useSelector(state => state.auth.name)
    const token = useSelector(state => state.auth.token)
    const handleLogout = () => {
        dispatch(logoutThunk(token))
    }

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {token && <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>}
                </ul>
            </nav>
            <div>
            {username ? (
                <div>
                    <p>{username}</p>
                    <button onClick={handleLogout} type='button'>Logout</button>
                </div>
            ) : (
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            )}
        </div>
        </header>
    );
}