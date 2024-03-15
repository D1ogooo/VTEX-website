import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
 
 * {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
 }
`

export const Container = styled.div`
 width: 90%;
 margin: 0 auto;
 z-index: 1;
`