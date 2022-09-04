import { Table, HeadRow, HeadCell } from './ContactsTable.styled';
import { ContactRow } from './ContactRow/ContactRow';
import { useGetMockApiQuery } from 'redux/mockApiSlice';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const ContactsTable = ({ trash }) => {
  let contactsForRender = [];
  const { data, isSuccess, isError } = useGetMockApiQuery('', {
    refetchOnFocus: true,
  });

  const { contactsFilter, trashFilter } = useSelector(state => state.filter);
  const filter = trash ? trashFilter : contactsFilter;

  // makes a list for render if request is success
  if (isSuccess) {
    contactsForRender = data
      .filter(
        ({ name, phone, isDeleted }) =>
          isDeleted === trash &&
          (name.includes(filter) || phone.includes(filter))
      )
      .reverse();
  }

  return (
    <>
      <Table>
        <HeadRow>
          <tr>
            <HeadCell>Name</HeadCell>
            <HeadCell>Phone number</HeadCell>
            <HeadCell>Action</HeadCell>
          </tr>
        </HeadRow>
        <tbody>
          {contactsForRender.map(({ id, name, phone, isDeleted }) => (
            <ContactRow
              key={id}
              id={id}
              name={name}
              number={phone}
              isDeleted={isDeleted}
            />
          ))}
        </tbody>
      </Table>
      {isError && (
        <h2>An error appeared to be on our side... We're so sorry :(</h2>
      )}
    </>
  );
};

ContactsTable.propTypes = {
  trash: PropTypes.bool.isRequired,
};
