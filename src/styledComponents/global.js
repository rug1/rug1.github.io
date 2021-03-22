import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Inter';
    background-color: ${({ theme }) => theme.colours.white};
    color: ${({ theme }) => theme.colours.black};
  }
`

export default GlobalStyle