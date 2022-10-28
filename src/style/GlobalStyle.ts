import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
 :root{
   --color_1:#313131; 
   --color_2:#95AD8E; 
    --color_3:#FFB901; 
    --color_4:#0B3B2D; 
    --color_5:#335BEA;
    --color_6:#E2E2E2;

    --color_white: #fff;
    --color_black: #000;
    --color_error: red;

    --font--main: 'Montserrat', sans-serif;
    --font--secondary:'Elsie Swash Caps', cursive;
 }
 
 *	{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 
  html,body{
    height: 100vh;
    width: 100vw;
    background-color: var(--color_white);
    font-family: var(--font--main);
    overflow-x: hidden;
  }

`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default GlobalStyle;
