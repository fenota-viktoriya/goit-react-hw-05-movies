import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Nav, StyledLink } from './Navigation.styled';


export const Navigation = () => {
  return (
    <>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
      <Toaster />
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </>
  );
};
