import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #3c4043;
  margin-left: 15px;
  letter-spacing: 0.25px;
`;
export const AddContactBtn = styled(NavLink)`
  display: inline-flex;
  height: 48px;
  margin: 23px 0;
  border-radius: 24px;
  padding: 2px 24px;
  align-items: center;
  background-color: #fff;
  text-decoration: none;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  box-sizing: border-box;
  cursor: pointer;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #f6fafe;
  }

  :active {
    border: 2px solid rgb(66, 133, 244);
  }
`;
