import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

export const Section = styled.div`
  display: flex;
     width: 1200;
   margin: 0 auto;
   padding:10px;
   border: 2px solid #F5F5F5;
   background: white;
   font-family: "Open Sans";
   transition: .3s ease-in;
   box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const Image = styled.img`
  display: block;
  width: 300px;
  height: 100%;
  margin-right: 30px;
`;


export const ListWrapper = styled.div`
   display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:10px;
  width:600px;
`;

export const LinkOption= styled(Link)`
  text-decoration: none;
  color: inherit;
  :visited {
    color: inherit;
  }
`;
