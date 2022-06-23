import * as React from "react";
import {Nav, StyledLink} from './Navigation.styled'



const Navigation = () => {

  return (
    <Nav>
      
          <StyledLink 
            to="/"
           
                      end
          >  Home
   
          </StyledLink >
       
          <StyledLink 
            to="/movies"
       
                      end
          >
            Movies
          </StyledLink >
      
    </Nav>
  );
}

    

export default Navigation;
