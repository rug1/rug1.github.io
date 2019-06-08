import styled, { keyframes, css } from "styled-components"

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const StyledHeader = styled.header`
  background-color: ${props =>
    props.transparent ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.5)"};
  padding: 20px;
  font-size: ${props => props.theme.fontSize.font19};
  box-shadow: ${props => (props.transparent ? "" : "0px 0px 4px 2px #3a3a3a")};
  height: 72px;
  color: ${props => (props.home ? "#000000" : "#ffffff")};
  width: 100%;
  position: absolute;
  animation: ${props =>
    props.home
      ? css`
          ${FadeIn} 0.5s ease-in
        `
      : ""};
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: right;
  }
`

export const Home = styled.li`
  position: absolute;
  left: 20px;
  top: 0px;
  cursor: pointer;
  transition: color 0.3s;
  font-size: ${props => props.theme.fontSize.font27};
  font-weight: 300;
  &:hover {
    color: ${props => props.theme.colours.primary};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

export const NavItem = styled.li`
  display: inline-block;
  margin-left: ${props => props.theme.spacing.md};
  cursor: pointer;
  padding-bottom: 2px;
  &:hover {
    border-bottom: 3px solid ${props => props.theme.colours.primary};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  &:first-child {
    margin-left: 0px;
  }
`
