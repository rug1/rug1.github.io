import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import Header from "../components/header"
import GlobalStyle from "../styledComponents/global"
import theme from "../styledComponents/theme"

const Layout = ({ children, pathname }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <Header pathname={pathname} />
      <main>{children}</main>
    </React.Fragment>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
