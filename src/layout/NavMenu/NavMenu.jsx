import { Menu, P, StyledLink, Item } from './NavMenu.styled';
import { Logo } from 'components/UI/Logo/Logo';
import { AddNewContactButton } from 'components/UI/AddNewContactButton/AddNewContactButton';
import { useGetServerApiQuery } from 'redux/apiSlice';
import { AuthMenu } from './AuthMenu/AuthMenu';
import { RiContactsFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { UserMenu } from './UserMenu/UserMenu';

export const NavMenu = () => {
  const { data } = useGetServerApiQuery(''); // get contacts list from state
  const contactsQuantity = data && data.length; // calculate contacts quantity
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Menu>
      <Logo to="/" />
      <AddNewContactButton />
      <StyledLink to="/">
        <RiContactsFill />
        <Item>
          <P>Contacts </P>
          {isLoggedIn ? <span>{contactsQuantity}</span> : null}
        </Item>
      </StyledLink>
      <hr></hr>
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </Menu>
  );
};
