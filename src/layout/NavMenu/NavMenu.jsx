import { Menu, P, StyledLink, Item } from './NavMenu.styled';
import { Logo } from 'components/UI/Logo/Logo';
import { AddNewContactButton } from 'components/UI/AddNewContactButton/AddNewContactButton';
import { useGetServerApiQuery } from 'redux/serverApi';
import { AuthMenu } from './AuthMenu/AuthMenu';
import { RiContactsFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { UserMenu } from './UserMenu/UserMenu';

export const NavMenu = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { data } = useGetServerApiQuery(''); // get contacts list from state
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
