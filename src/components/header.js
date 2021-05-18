import React from "react"
import { Link } from 'gatsby'
import { StyledHeader, NavItem, Switch, Slider, Toggle } from "../styledComponents/header"
import { LIGHT_THEME } from "./provider"

const Header = ({ pathname, themeToggler, theme }) => {
  return (
    <StyledHeader>
      <ul>
        <NavItem home path={pathname} active={pathname === "/"}>
          <Link to="/">R</Link>
        </NavItem>

        {/* <NavItem to="/experience" active={pathname.includes("/experience")}>
          <Link>Experience</Link>
        </NavItem> */}

        <NavItem path={pathname} active={pathname.includes("/blog")}>
          <Link to="/blog">Blog</Link>
        </NavItem>

        <NavItem path={pathname} active={pathname.includes("/contact")}>
          <Link to="/contact">Contact</Link>
        </NavItem>
      </ul>

        {pathname !== "/" && (
          <Switch htmlFor="themeToggle" title="Change color scheme to dark mode">
            <input
              type="checkbox"
              id="themeToggle"
              onChange={themeToggler} 
              checked={theme !== LIGHT_THEME}
            />
            <Slider className="slider" />
            <Toggle>
              <span role="img" aria-label="dark mode">🌙</span>
            </Toggle>
            <Toggle>
              <span role="img" aria-label="light mode">☀️</span>
            </Toggle>
          </Switch>
        )}
    </StyledHeader>
  )
}

export default Header
