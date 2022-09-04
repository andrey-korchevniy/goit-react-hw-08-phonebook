import {
  Row,
  Cell,
  CellAmount,
  DeleteForeverBtn,
  CellAction,
} from './ContactRow.styled';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/apiSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { RiDeleteBin5Line } from 'react-icons/ri';

Notify.init({ position: 'center-top' });

export const ContactRow = ({ id, name, number }) => {
  // processing deleting forever
  const [deleteContact] = useDeleteContactMutation(id);

  const handleDeleteContact = () => {
    deleteContact(id);
    Notify.success('Yor contact has been deleted forever');
  };

  return (
    <Row>
      <Cell>{name}</Cell>
      <CellAmount>{number}</CellAmount>
      <CellAction>
        <DeleteForeverBtn onClick={handleDeleteContact}>
          <RiDeleteBin5Line size="1.2em" />
        </DeleteForeverBtn>
      </CellAction>
    </Row>
  );
};

ContactRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
