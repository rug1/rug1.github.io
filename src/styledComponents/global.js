import { createGlobalStyle } from "styled-components"

export const VIEW_HEIGHT = 'calc(100vh - 64px)';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Inter';
    background-color: ${({ theme }) => theme.bodyColour};
    color: ${({ theme }) => theme.textColour};
    transition: all 0.3s linear;
  }

  p {
    line-height: 21px;
  }

  a {
    color: ${({theme}) => theme.textColour};
    text-decoration: underline;

    &:hover {
      color: ${({theme}) => theme.colours.light};
    }
  }
`

export default GlobalStyle