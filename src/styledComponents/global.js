import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Nunito Sans';
    src: url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap');
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
  }
`

export default GlobalStyle
