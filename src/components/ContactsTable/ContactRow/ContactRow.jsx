import {
  Row,
  Cell,
  CellAmount,
  DeleteBtn,
  DeleteForeverBtn,
  CellAction,
} from './ContactRow.styled';
import PropTypes from 'prop-types';
import { SvgDelete } from 'images/Svg';
import { useDeleteContactMutation } from 'redux/mockApiSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
          <SvgDelete />
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
