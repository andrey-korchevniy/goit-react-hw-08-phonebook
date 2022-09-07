import { Menu, P, StyledLink, Item } from './NavMenu.styled';
import { Logo } from 'components/UI/Logo/Logo';
import { AddNewContactButton } from 'components/UI/AddNewContactButton/AddNewContactButton';
import { useGetContactsApiQuery } from 'redux/contacts-api/contactsApi';
import { AuthMenu } from './AuthMenu/AuthMenu';
import { RiContactsFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { UserMenu } from './UserMenu/UserMenu';

export const NavMenu = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { data } = useGetContactsApiQuery(); // get contacts list from state

  const contactsQuantity = data && data.length; // calculate contacts quantity

  return (
    <Menu>
      <Logo to="/" />
      {isLoggedIn ? (
        <>
          <AddNewContactButton />
          <StyledLink to="/">
            <RiContactsFill />
            <Item>
              <P>Contacts </P>
              {isLoggedIn ? <span>{contactsQuantity}</span> : null}
            </Item>
          </StyledLink>
        </>
      ) : null}
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </Menu>
  );
};
