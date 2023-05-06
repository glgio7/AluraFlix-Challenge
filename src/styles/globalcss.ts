import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
*{
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  min-height: 100vh;
  
  background-color: #333;
}

img {
  height: 100%;
}

`;

export default GlobalCSS;
