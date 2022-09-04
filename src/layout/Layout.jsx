import { Outlet } from 'react-router-dom';
import { Container, Main } from './Layout.styled';
import { NavMenu } from './NavMenu/NavMenu';

const Layout = () => {
  return (
    <Container>
      <NavMenu />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default Layout;
