import { Outlet } from 'react-router-dom';
import { Container, Main } from './Layout.styled';
import { NavMenu } from './NavMenu/NavMenu';
import { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';

export default function Layout() {
  return (
    <Container>
      <NavMenu />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}
