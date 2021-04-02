import React from "react"
import { Link } from 'gatsby'
import { StyledHeader, NavItem } from "../styledComponents/header"

const Header = ({ pathname }) => (
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
  </StyledHeader>
)

export default Header
