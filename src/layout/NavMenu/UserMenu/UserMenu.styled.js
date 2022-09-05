import styled from 'styled-components';

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
export const LogoutBtn = styled.button`
  display: inline-flex;
  margin: 10px 60px;
  border: 0;
  background-color: #fff;
  align-items: center;
  border-radius: 24px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  box-sizing: border-box;
  cursor: pointer;
  height: 38px;
  justify-content: center;
  padding: 2px 24px;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  /* transition-property: box-shadow, background-color, transform; */
  transition-duration: 24ms, 100ms, 270ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0s, 30ms, 0ms;

  :hover {
    background-color: #f6fafe;
  }

  :active {
    border-color: rgb(66, 133, 244);
    border-width: 2px;
    border-style: solid;
  }
`;
