import { Table, HeadRow, HeadCell } from './ContactsTable.styled';
import { ContactRow } from './ContactRow/ContactRow';
import { useGetMockApiQuery } from 'redux/mockApiSlice';
import { useSelector } from 'react-redux';

export const ContactsTable = () => {
  let contactsForRender = [];
  const { data, isSuccess, isError } = useGetMockApiQuery('', {
    refetchOnFocus: true,
  });

  const { filter } = useSelector(state => state.filter);

  // makes a list for render if request is success
  if (isSuccess) {
    contactsForRender = data
      .filter(
        ({ name, number }) => name.includes(filter) || number.includes(filter)
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
          {contactsForRender.map(({ id, name, number }) => (
            <ContactRow key={id} id={id} name={name} number={number} />
          ))}
        </tbody>
      </Table>
      {isError && (
        <h2>An error appeared to be on our side... We're so sorry :(</h2>
      )}
    </>
  );
};
