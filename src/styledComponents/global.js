import { createGlobalStyle } from "styled-components"

export const VIEW_HEIGHT = 'calc(100vh - 80px)';

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

  a {
    color: ${({theme}) => theme.colours.light};
    text-decoration: underline;

    &:hover {
      color: ${({theme}) => theme.colours.darkest};
    }
  }
`

export default GlobalStyle