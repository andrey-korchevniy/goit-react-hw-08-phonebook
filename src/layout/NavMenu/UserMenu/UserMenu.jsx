import {
  MenuItems,
  StyledEmail,
  P,
  LogoutLink,
  BtnText,
} from './UserMenu.styled';
import { IoMdLogOut } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(logOut());
  };

  return (
    <MenuItems>
      <li>
        <StyledEmail to="/login">
          <P>{email}</P>
        </StyledEmail>
      </li>
      <li>
        <LogoutLink to="/" onClick={handleSubmit}>
          <IoMdLogOut /> <BtnText>Log Out</BtnText>
        </LogoutLink>
      </li>
    </MenuItems>
  );
};
