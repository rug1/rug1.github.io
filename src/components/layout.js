import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import GlobalStyle from "../styledComponents/global"
import theme from "../styledComponents/theme"

const Main = styled.main`
  padding: 0 48px;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <Main>{children}</Main>
    </React.Fragment>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
