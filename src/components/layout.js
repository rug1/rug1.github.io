import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import Header from "../components/header"
import GlobalStyles from "../styledComponents/global"
import { ThemeContext } from "./provider";
import { lightTheme, darkTheme } from "../styledComponents/theme"

import { LIGHT_THEME } from "./provider"

import "animate.css/animate.min.css"

const Layout = ({ children, pathname }) => (
  <ThemeContext.Consumer>
    {context => {
      if (context)
        return (
        <ThemeProvider theme={context.theme === LIGHT_THEME ? lightTheme : darkTheme}>
          <React.Fragment>
            <GlobalStyles />
            <Header
              pathname={pathname}
              themeToggler={context.themeToggler}
              theme={context.theme}
            />
            <main>{children}</main>
          </React.Fragment>
        </ThemeProvider>
    )}}
  </ThemeContext.Consumer>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
