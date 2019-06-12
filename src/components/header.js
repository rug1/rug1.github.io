import React from "react"
import { Link } from "gatsby"
import { StyledHeader, HomeIcon, NavItem } from "../styledComponents/header"

const Header = props => (
  <StyledHeader>
    <ul>
      <NavItem home active={props.pathname === "/"}>
        <Link to="/">
          <HomeIcon />
        </Link>
      </NavItem>

      <NavItem active={props.pathname === "/experience"}>
        <Link to="/experience">Experience</Link>
      </NavItem>

      <NavItem active={props.pathname === "/blog"}>Blog</NavItem>
      <NavItem active={props.pathname === "/contact"}>
        <Link to="/contact">Contact</Link>
      </NavItem>
    </ul>
  </StyledHeader>
)

export default Header
