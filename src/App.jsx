import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spinner } from 'components/UI/Spinner/Spinner';

const Layout = lazy(() => import('./layout/Layout'));
const Contacts = lazy(() => import('./pages/Contacts'));
const NewContact = lazy(() => import('./pages/NewContact/NewContact'));
const LogIn = lazy(() => import('./pages/LogIn'));
const SignUp = lazy(() => import('./pages/SignUp'));

export const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Contacts />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="newcontact" element={<NewContact />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
