import styled from "styled-components"

export const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSize.font16};
  width: 100%;
  z-index: 100;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`

export const NavItem = styled.li`
  display: inline-block;
  margin-right: ${props =>
    props.home ? props.theme.spacing.lg : props.theme.spacing.md};
  cursor: pointer;
  padding-bottom: 2px;
  border: ${({ theme, active, home }) => 
    active && home ? `2px solid ${theme.colours.darkest}` : "2px solid transparent"};
  border-bottom: ${({ theme, active, home }) =>
    active && !home ? `3px solid ${theme.colours.light}` : ""};
  line-height: 24px;
  text-decoration: none;
  font-weight: ${({ active }) => active ? "600" : "300"};

  a {
    color: ${({ path }) => path === '/' ? "#ffffff" : "#000000"};
    text-decoration: none;

    &:hover {
      color: ${({ path }) => path === '/' ? "#ffffff" : "#000000"};
    }
  }

  &:first-child {
    background-color: ${({ theme }) => theme.colours.light};
    border-radius: 100%;
    padding: 6px;
    width: 40px;
    height: 40px;
    text-align: center;
  }

  &:last-child {
    margin-right: 0px;
  }
`
