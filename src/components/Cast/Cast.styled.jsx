import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;`

export const Item = styled.li`
  display: flex;
 flex-direction: column;
    width: 200px;
   text-align: center;
   margin: 0 auto;
   padding:5px;
   border: 2px solid #F5F5F5;
   background: white;
   font-family: "Open Sans";
   transition: .3s ease-in;
   box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  `
export const Title = styled.p`
    font-size: 20px;
  font-weight: bold;
   border-bottom: 2px solid #F5F5F5;`

export const Image = styled.img`
margin-bottom: 10px;`

export const Info = styled.p`
   font-size: 20px;
  font-weight: 400;
 font-style: italic;

`