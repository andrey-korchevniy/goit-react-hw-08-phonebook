import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuItems = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
export const StyledEmail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  padding: 10px 26px;
  color: #202124;
  width: 200px;
  font-size: 14px;
`;
export const P = styled.p`
  margin: 0 0 0 30px;
`;
export const BtnText = styled.p`
  margin-left: 10px;
`;
export const LogoutLink = styled(NavLink)`
  display: inline-flex;
  height: 36px;
  margin: 10px 65px;
  padding: 2px 10px 0 8px;
  border-radius: 24px;
  background-color: #fff;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  color: #202124;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #f6fafe;
  }

  :active {
    border: 2px solid rgb(66, 133, 244);
  }
`;
