import styled from "styled-components"

export const StyledHeader = styled.header`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.fontSize.font16};
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: inline-block;
  }

  @media only screen and (max-width: 950px) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.sm}`};
  }
`

export const NavItem = styled.li`
  display: inline-block;
  margin-right: ${props =>
    props.home ? props.theme.spacing.lg : props.theme.spacing.md};
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: ${({ theme, active, home }) =>
    active && !home ? `3px solid ${theme.colours.light}` : ""};
  line-height: 26px;
  text-decoration: none;
  font-weight: 600;

  a {
    color: ${({ theme, path }) => path === '/' ? theme.colours.white : theme.textColour};
    text-decoration: none;

    &:hover {
      color: ${({ theme, path }) => path === '/' ? theme.colours.white : theme.textColour};
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

export const Switch = styled.label`
  display: flex;
  height: 36px;
  position: relative;
  width: 70px;
  cursor: pointer;

  input {
    display: none;
  }

  input:checked + .slider {
    background-color: ${({ theme }) => theme.bodyColour};
  }
  
  input:checked + .slider:before {
    transform: translateX(34px);
    border-color: ${({ theme }) => theme.textColour};
    background-color: ${({ theme }) => theme.textColour};
  }
`

export const Slider = styled.div`
  background-color: ${({ theme }) => theme.colours.white};
  border: 1px solid ${({ theme }) => theme.textColour};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
  border-radius: 34px;

  &:before {
    background-color: ${({ theme }) => theme.colours.black};
    border: 1px solid ${({ theme }) => theme.colours.white};
    bottom: 3px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 26px;
    z-index: 1;
    border-radius: 50%;
  }
`

export const Toggle = styled.div`
  width: 50%;
  text-align: center;
  padding: 8px;
  position: relative;
`
