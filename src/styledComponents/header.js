import styled from "styled-components"
import HomeIconSVG from "../svgs/home.svg"

export const StyledHeader = styled.header`
  padding: 30px 60px;
  font-size: ${props => props.theme.fontSize.font19};
  color: #ffffff;
  width: 100%;
  position: absolute;

  @media only screen and (max-width: 950px) {
    padding: 20px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`

export const HomeIcon = styled(HomeIconSVG)`
  width: 30px;
  height: 30px;
  vertical-align: bottom;
  fill: #ffffff;
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
