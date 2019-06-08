import React from "react"
import { Link } from "gatsby"
import { StyledHeader, Home, NavItem } from "../styledComponents/header"

const Header = props => (
  <StyledHeader>
    <ul>
      {!props.home && (
        <Home>
          <Link to="/">
            <strong style={{ fontSize: "42px" }}>R</strong>uth
          </Link>
        </Home>
      )}

      <NavItem active={props.location === "/experience"}>
        <Link to="/experience">Experience</Link>
      </NavItem>

      <NavItem active={props.location === "/blog"}>Blog</NavItem>
      <NavItem active={props.location === "/contact"}>
        <Link to="/contact">Contact</Link>
      </NavItem>
    </ul>
  </StyledHeader>
)

export default Header
