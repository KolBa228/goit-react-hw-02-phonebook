import { Route, Routes } from 'react-router-dom';
import {Contacts} from 'pages/Contacts/Contacts';
import { Header } from './Header/Header';
import { Home } from 'pages/Home/Home';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { LoginedPath } from 'layout/LoginedPath/LoginedPath';
import { NotLoginedPath } from 'layout/NotLoginedPath/NotLoginedPath';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserThunk } from 'redux/authThunk';

export const App = () => {

  const dispatch = useDispatch()
  // fetchUserThunk

  useEffect(() => {
    dispatch(fetchUserThunk())
    
  }, [dispatch])
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <NotLoginedPath
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <NotLoginedPath
              redirectTo="/contacts"
              component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <LoginedPath
              redirectTo="/login"
              component={<Contacts />} />
          }
        />
      </Routes>
    </>
  );
}

