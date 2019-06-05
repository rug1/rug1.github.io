import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${props => props.theme.colours.primary};
    font-family: Arial;
  }
`

export default GlobalStyle
