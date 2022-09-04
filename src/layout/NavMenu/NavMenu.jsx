import { MenuItems, Menu, P, StyledLink, Item } from './NavMenu.styled';
import { Logo } from 'components/UI/Logo/Logo';
import { AddNewContactButton } from 'components/UI/AddNewContactButton/AddNewContactButton';
import { SvgContact } from 'images/Svg';
import { useGetMockApiQuery } from 'redux/mockApiSlice';

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
            <SvgContact />
            <Item>
              <P>Contacts </P>
              <span>{contactsQuantity}</span>
            </Item>
          </StyledLink>
        </li>
      </MenuItems>
    </Menu>
  );
};
