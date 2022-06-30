import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const Links = styled(Link)`
  background: lightskyblue;
  border: 2px solid #eee;
  height: 28px;
  width: 100px;
  padding: 0 0 0 7px;
  overflow: hidden;
  display: block;
  transition: All 0.5s ease;
  border-radius:5px;
  &:hover{
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.2);
    background-color: lightgoldenrodyellow;
  }
`

export const List = styled.ul`
display:flex;
 flex-direction: column;
 padding:  10px ;
 gap:10px;`