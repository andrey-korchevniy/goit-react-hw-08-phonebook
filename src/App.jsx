import { Routes, Route } from 'react-router-dom';
import { Spinner } from 'components/UI/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import PrivateRoute from 'hocs/PrivateRoute';
import PublicRoute from 'hocs/PublicRoute';
import { getIsRefreshingUser } from 'redux/auth/auth-selectors';
import Layout from 'layout/Layout';
import Contacts from 'pages/Contacts';
import NewContact from 'pages/NewContact/NewContact';
import LogIn from 'pages/LogIn';
import SignUp from 'pages/SignUp';
import Home from 'pages/Home';

//! Я убрал Lazy, иначе у меня ложится все приложение - конфликт с роутом, не смог разобраться, почему.
// const Layout = lazy(() => import('./layout/Layout'));
// const Contacts = lazy(() => import('./pages/Contacts'));
// const NewContact = lazy(() => import('./pages/NewContact/NewContact'));
// const LogIn = lazy(() => import('./pages/LogIn'));
// const SignUp = lazy(() => import('./pages/SignUp'));
// const Home = lazy(() => import('./pages/Home'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getIsRefreshingUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshingUser ? (
    <Spinner />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/" restricted>
                <LogIn />
              </PublicRoute>
            }
          />
          <Route
            path="signup"
            element={
              <PublicRoute redirectTo="/" restricted>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="newcontact"
            element={
              <PrivateRoute redirectTo="login">
                <NewContact />
              </PrivateRoute>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
};
