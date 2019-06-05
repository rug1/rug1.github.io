import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "../styledComponents/global"
import theme from "../styledComponents/theme"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <main>{children}</main>
    </React.Fragment>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
