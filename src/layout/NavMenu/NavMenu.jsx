import { MenuItems, Menu, P, StyledLink, Item } from './NavMenu.styled';
import { Logo } from 'components/UI/Logo/Logo';
import { AddNewContactButton } from 'components/UI/AddNewContactButton/AddNewContactButton';
import { useGetMockApiQuery } from 'redux/apiSlice';
import { AuthMenu } from './AuthMenu/AuthMenu';
import { RiContactsFill } from 'react-icons/ri';

export const NavMenu = () => {
  const { data } = useGetMockApiQuery(''); // get contacts list from state
  const contactsQuantity = data && data.length; // calculate contacts quantity

  return (
    <Menu>
      <Logo to="/" />
      <AddNewContactButton />
      <MenuItems>
        <li>
          <StyledLink to="/">
            <RiContactsFill />
            <Item>
              <P>Contacts </P>
              <span>{contactsQuantity}</span>
            </Item>
          </StyledLink>
        </li>
        <hr></hr>
        <AuthMenu />
      </MenuItems>
    </Menu>
  );
};
