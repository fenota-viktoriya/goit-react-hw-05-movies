import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 10px;
  display: flex;
  gap: 15px;
  border-bottom: 2px solid rgb(0, 198, 255);
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    background: rgb(163, 226, 255);
    background: linear-gradient(
      90deg,
      rgba(163, 226, 255, 0.8281687675070029) 36%,
      rgba(245, 250, 148, 0.6152836134453781) 69%
    );
  }
`;
