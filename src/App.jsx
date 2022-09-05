import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spinner } from 'components/UI/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { getIsRefreshingUser } from 'redux/selectors';

const Layout = lazy(() => import('./layout/Layout'));
const Contacts = lazy(() => import('./pages/Contacts'));
const NewContact = lazy(() => import('./pages/NewContact/NewContact'));
const LogIn = lazy(() => import('./pages/LogIn'));
const SignUp = lazy(() => import('./pages/SignUp'));

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
              <PrivateRoute redirectTo="login">
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
    </Suspense>
  );
};
