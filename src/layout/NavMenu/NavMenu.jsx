import { MenuItems, Menu, P, StyledLink, Item } from './NavMenu.styled';
import { Logo } from 'components/UI/Logo/Logo';
import { AddNewContactButton } from 'components/UI/AddNewContactButton/AddNewContactButton';
import { SvgContact, SvgTrash } from 'images/Svg';
import { useGetMockApiQuery } from 'redux/mockApiSlice';

export const NavMenu = () => {
  const { data } = useGetMockApiQuery(''); // get contacts list from state
  const noDeleted =
    data && data.filter(item => item.isDeleted === false).length; // calculate contacts
  const isDeleted = data && data.length - noDeleted; // calculate deleted contacts

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
              <span>{noDeleted}</span>
            </Item>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/trash">
            <SvgTrash />
            <Item>
              <P>Trash</P>
              <span>{isDeleted}</span>
            </Item>
          </StyledLink>
        </li>
      </MenuItems>
    </Menu>
  );
};
