import React from 'react';
import { ContactsTable } from 'components/ContactsTable/ContactsTable';
import { FilterBar } from 'components/FilterBar/FilterBar';

const Contacts = () => {
  return (
    <>
      <FilterBar trash={false} />
      <ContactsTable trash={false} />
    </>
  );
};

export default Contacts;
