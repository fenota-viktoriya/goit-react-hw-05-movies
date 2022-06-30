import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FilmItem = styled(Link)`
  font-size: 20px;
  color: darkslategray;
  transition: 0.3s ease-in;

  &:hover {
    background: rgb(163, 226, 255);
    background: linear-gradient(
      90deg,
      rgba(163, 226, 255, 0.8281687675070029) 36%,
      rgba(245, 250, 148, 0.6152836134453781) 69%
    );
  }
`;

export const FilmList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
