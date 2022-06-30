import styled from '@emotion/styled';

export const ReviewList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Review = styled.li`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Name = styled.h3`
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
`;
