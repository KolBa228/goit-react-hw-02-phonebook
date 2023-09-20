import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logoutThunk } from 'redux/authThunk';
import { StyledHeader, NavList, MenuList, HeaderBtn } from './HeaderStyled';

export const Header = () => {

    const dispatch = useDispatch()
    const username = useSelector(state => state.auth.name)
    const token = useSelector(state => state.auth.token)
    const handleLogout = () => {
        dispatch(logoutThunk(token))
    }

    return (
        <StyledHeader>
            <nav>
                <NavList>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {token && <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>}
                </NavList>
            </nav>
            <div style={{ display: 'flex' }}>
            {username ? (
                <MenuList>
                    <p>{username}</p>
                    <HeaderBtn onClick={handleLogout} type='button'>Logout</HeaderBtn>
                </MenuList>
            ) : (
                <MenuList>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </MenuList>
            )}
        </div>
        </StyledHeader>
    );
}