import { MenuItems, StyledLink, Item, P } from '../NavMenu.styled';
import { AiOutlineLogin } from 'react-icons/ai';
import { CgKeyhole } from 'react-icons/cg';

export const AuthMenu = () => {
  return (
    <MenuItems>
      <li>
        <StyledLink to="/login">
          <AiOutlineLogin />
          <Item>
            <P>Log In </P>
          </Item>
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/signup">
          <CgKeyhole />
          <Item>
            <P>Sign Up </P>
          </Item>
        </StyledLink>
      </li>
    </MenuItems>
  );
};
