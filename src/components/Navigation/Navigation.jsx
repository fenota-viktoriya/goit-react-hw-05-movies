import * as React from "react";
import {Nav, StyledLink} from './Navigation.styled'



const Navigation = () => {

  return (
    <Nav>
      
          <StyledLink 
            to="/"
           
                      
          >  Home
   
          </StyledLink >
       
          <StyledLink 
            to="/movies"
       
                      
          >
            Movies
          </StyledLink >
      
    </Nav>
  );
}

    

export default Navigation;
