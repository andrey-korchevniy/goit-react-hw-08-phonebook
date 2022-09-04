import React from 'react';
import { ContactsTable } from 'components/ContactsTable/ContactsTable';
import { FilterBar } from 'components/FilterBar/FilterBar';

const Trash = () => {
  return (
    <>
      <FilterBar trash={true} />
      <ContactsTable trash={true} />
    </>
  );
};

export default Trash;
