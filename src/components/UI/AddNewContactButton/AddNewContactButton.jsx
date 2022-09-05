import cross from 'images/cross.png';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { Title, AddContactBtn } from './AddNewContactButton.styled';

// big button with cross and 'New contact'
export const AddNewContactButton = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <AddContactBtn to={'/newcontact'}>
      <img src={cross} alt="cross" width="25px" height="25px" />
      <Title>New contact</Title>
    </AddContactBtn>
  );
};
