import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import Header from "../components/header"
import GlobalStyle from "../styledComponents/global"
import theme from "../styledComponents/theme"

import "animate.css/animate.min.css"

const Layout = ({ children, pathname, headerColour, headerTextColour }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <Header
        pathname={pathname}
        headerColour={headerColour}
        headerTextColour={headerTextColour}
      />
      <main>{children}</main>
    </React.Fragment>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
