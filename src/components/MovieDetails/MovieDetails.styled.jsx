import styled from '@emotion/styled';

export const Section = styled.div`
  display: flex;
  width: 1200;
  margin: 0 auto;
  padding: 10px;
  border: 2px solid #f5f5f5;
  background: white;
  font-family: 'Open Sans';
  transition: 0.3s ease-in;
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
  gap: 10px;
  width: 600px;
`;

export const TitleOption = styled.p`
  font-size: 20px;
  font-weight: bold;
  border-bottom: 2px solid #f5f5f5;
`;

export const TextOption = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
`;
