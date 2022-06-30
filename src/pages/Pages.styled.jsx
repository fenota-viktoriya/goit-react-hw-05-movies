import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Links = styled(Link)`
  background: rgb(163, 226, 255);
  background: linear-gradient(
    90deg,
    rgba(163, 226, 255, 0.8281687675070029) 36%,
    rgba(245, 250, 148, 0.6152836134453781) 69%
  );
  border: 2px solid #eee;
  height: 22px;
  width: 100px;
  padding: 3px;
  overflow: hidden;
  display: block;
  transition: All 0.5s ease;
  border-radius: 5px;
  &:hover {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.2);
    background: rgb(43, 188, 255);
    background: linear-gradient(
      90deg,
      rgba(43, 188, 255, 0.8281687675070029) 36%,
      rgba(246, 232, 84, 0.6152836134453781) 69%
    );
  }
`;

export const List = styled.ul`
display:flex;
 flex-direction: column;
 padding:  10px ;s
 gap:10px;`;

export const Form = styled.form`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Btn = styled.button`
margin-left:10px;
font-size:16px;
padding:3px;`

export const Input = styled.input`
  height: 28px;
`
