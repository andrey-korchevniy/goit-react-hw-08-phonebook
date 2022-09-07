import { Routes, Route } from 'react-router-dom';
import { Spinner } from 'components/UI/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import PrivateRoute from 'hocs/PrivateRoute';
import PublicRoute from 'hocs/PublicRoute';
import { getIsRefreshingUser } from 'redux/auth/auth-selectors';

const Layout = lazy(() => import('./layout/Layout'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const NewContact = lazy(() => import('./pages/NewContact/NewContact'));
const LogIn = lazy(() => import('./pages/LogIn/LogIn'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Home = lazy(() => import('./pages/Home'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getIsRefreshingUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshingUser ? (
    <Spinner />
  ) : (
    <Suspense fallback={<Spinner />}>
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
              <PrivateRoute redirectTo="/">
                <NewContact />
              </PrivateRoute>
            }
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
