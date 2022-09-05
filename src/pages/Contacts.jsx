import React from 'react';
import { ContactsTable } from 'components/ContactsTable/ContactsTable';
import { FilterBar } from 'components/FilterBar/FilterBar';
import { useSelector } from 'react-redux';
import { getIsRefreshingUser } from 'redux/selectors';
import { Spinner } from 'react-bootstrap';

const Contacts = () => {
  const isRefreshingUser = useSelector(getIsRefreshingUser);

  return isRefreshingUser ? (
    <Spinner />
  ) : (
    <>
      <FilterBar />
      <ContactsTable />
    </>
  );
};

export default Contacts;
