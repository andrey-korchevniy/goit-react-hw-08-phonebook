import { Outlet } from 'react-router-dom';
import { Container, Main } from './Layout.styled';
import { NavMenu } from './NavMenu/NavMenu';
import { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';

const Layout = () => {
  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <NavMenu />
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </Container>
  );
};

export default Layout;
