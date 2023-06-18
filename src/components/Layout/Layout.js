import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './Layout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader width={96} />}></Suspense>
      <Outlet />
      <Toaster position="top-left" reverseOrder={false} />
    </Container>
  );
};
