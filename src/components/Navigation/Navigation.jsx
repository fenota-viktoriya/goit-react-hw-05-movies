import { Outlet } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';
import { Nav, StyledLink, } from './Navigation.styled'
import  { Suspense} from 'react';



const Navigation = () => {
  return (
    <>
      <Nav>
          <StyledLink  to="/" >Home</StyledLink >      
          <StyledLink to="/movies" >Movies</StyledLink >  
      </Nav>   
      <Toaster />
       <Suspense fallback="Loading..."><Outlet /></Suspense>
  
    
    </>
  );
}

    

export default Navigation;
