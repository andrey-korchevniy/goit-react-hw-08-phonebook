import { MenuItems, StyledLink, Item, P } from '../NavMenu.styled';

export const UserMenu = () => {
  return (
    <MenuItems>
      <li>
        <StyledLink to="/login">
          <Item>
            <P>Log In </P>
          </Item>
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/signup">
          <Item>
            <P>Sign Up </P>
          </Item>
        </StyledLink>
      </li>
    </MenuItems>
  );
};
