import React from 'react';
import { ContactsTable } from 'components/ContactsTable/ContactsTable';
import { FilterBar } from 'components/FilterBar/FilterBar';
import { useSelector } from 'react-redux';
import { getIsRefreshingUser } from 'redux/auth/auth-selectors';
import { Spinner } from 'react-bootstrap';

export default function Contacts() {
  const isRefreshingUser = useSelector(getIsRefreshingUser);

  return isRefreshingUser ? (
    <Spinner />
  ) : (
    <>
      <FilterBar />
      <ContactsTable />
    </>
  );
}
