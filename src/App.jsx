import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spinner } from 'components/UI/Spinner/Spinner';

const Layout = lazy(() => import('./layout/Layout'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Trash = lazy(() => import('./pages/Trash/Trash'));
const NewContact = lazy(() => import('./pages/NewContact/NewContact'));

export const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Contacts />} />
          <Route path="trash" element={<Trash />} />
          <Route path="newcontact" element={<NewContact />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
