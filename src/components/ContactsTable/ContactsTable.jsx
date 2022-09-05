import { Table, HeadRow, HeadCell } from './ContactsTable.styled';
import { ContactRow } from './ContactRow/ContactRow';
import { useGetServerApiQuery } from 'redux/serverApi';
import { getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

export const ContactsTable = () => {
  let contactsForRender = null;

  const { data, isSuccess, isError } = useGetServerApiQuery('', {
    refetchOnFocus: true,
  });

  const filter = useSelector(getFilter);

  // makes a list for render if request is success
  if (isSuccess) {
    contactsForRender = data
      .filter(
        ({ name, number }) => name.includes(filter) || number.includes(filter)
      )
      .reverse();
  }

  return contactsForRender !== null ? (
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
  ) : (
    <Spinner />
  );
};
