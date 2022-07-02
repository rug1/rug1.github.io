import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import Header from "../Header"
import { Subscribe } from "../Subscribe"

import GlobalStyles from "../../styles/global"
import { ThemeContext } from "../Provider";
import { lightTheme, darkTheme } from "../../styles/theme"

import { LIGHT_THEME } from "../Provider"

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
            {pathname.includes('blog') && (
              <Subscribe />
            )}
          </React.Fragment>
        </ThemeProvider>
    )}}
  </ThemeContext.Consumer>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
