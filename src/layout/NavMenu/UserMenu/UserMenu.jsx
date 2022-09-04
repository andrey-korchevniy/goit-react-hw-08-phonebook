import {
  MenuItems,
  StyledEmail,
  P,
  LogoutBtn,
  BtnText,
} from './UserMenu.styled';
import { IoMdLogOut } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from 'redux/selectors';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log('logout');
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
        <LogoutBtn type="submit" onClick={handleSubmit}>
          <IoMdLogOut /> <BtnText>Log Out</BtnText>
        </LogoutBtn>
      </li>
    </MenuItems>
  );
};
