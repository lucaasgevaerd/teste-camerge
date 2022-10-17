import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica;
  }
  
  body {
    background-color: var(--blue-fourth);
  }

  :root {
    --blue-primary: #31A5F5;
    --blue-secondary: #64B5F6;
    --blue-tertiary: #90CAF9;
    --blue-fourth: #BBDEFB;
    --blue-fifth: #E3F2FD;
    --blue-glow: #64C7F7;
  }

  li {
  list-style-type: none;
}
`;
