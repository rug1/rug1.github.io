import styled from "styled-components"
import HomeIconSVG from "../svgs/home.svg"

export const StyledHeader = styled.header`
  padding: 20px 60px;
  font-size: ${props => props.theme.fontSize.font19};
  color: ${props => props.headerTextColour || "#ffffff"};
  width: 100%;
  position: fixed;
  z-index: 100;
  background-color: ${props => props.headerColour};

  @media only screen and (max-width: 950px) {
    padding: 20px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  svg {
    fill: ${props => props.headerTextColour || "#ffffff"};
  }
`

export const HomeIcon = styled(HomeIconSVG)`
  width: 30px;
  height: 30px;
  vertical-align: bottom;
`

export const NavItem = styled.li`
  display: inline-block;
  margin-right: ${props =>
    props.home ? props.theme.spacing.lg : props.theme.spacing.md};
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: ${props =>
    props.active ? `3px solid ${props.theme.colours.primary}` : ""};

  a {
    color: inherit;
    text-decoration: none;
  }

  &:last-child {
    margin-right: 0px;
  }
`
