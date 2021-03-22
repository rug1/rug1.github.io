import React from "react"
import { StyledHeader, HomeIcon, NavItem } from "../styledComponents/header"

const Header = props => (
  <StyledHeader>
    <ul>
      <NavItem to="/" home path={props.pathname} active={props.pathname === "/"}>
        <li>R</li>
      </NavItem>

      {/* <NavItem to="/experience" active={props.pathname.includes("/experience")}>
        <li>Experience</li>
      </NavItem> */}

      <NavItem to="/blog" path={props.pathname} active={props.pathname.includes("/blog")}>
        <li>Blog</li>
      </NavItem>

      <NavItem to="/contact" path={props.pathname} active={props.pathname.includes("/contact")}>
        <li>Contact</li>
      </NavItem>
    </ul>
  </StyledHeader>
)

export default Header
