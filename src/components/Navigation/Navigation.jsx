import { Outlet } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';
import {Nav, StyledLink, } from './Navigation.styled'



const Navigation = () => {
  return (
    <>
      <Nav>
          <StyledLink  to="/" >Home</StyledLink >      
          <StyledLink to="/movies" >Movies</StyledLink >  
      </Nav>   
      <Toaster/>
      <Outlet />
    
    </>
  );
}

    

export default Navigation;
