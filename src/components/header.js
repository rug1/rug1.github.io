import React from "react"
import styled, { keyframes } from "styled-components"

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const StyledHeader = styled.header`
  background-color: rgba(255, 255, 255, 0.6);
  padding: 18px 36px;
  font-size: 18px;
  box-shadow: 0px 0px 4px 2px #383838;
  height: 62px;
  animation: ${FadeIn} 1s ease-in;
  position: fixed;
  width: 100%;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: right;

    li {
      display: inline-block;
      margin-left: 36px;
      cursor: pointer;
      padding-bottom: 2px;

      &:hover {
        border-bottom: 3px solid ${props => props.theme.colours.primary};
      }
    }

    li:first-child {
      margin-left: 0px;
    }
  }
`

const Header = () => (
  <StyledHeader>
    <ul>
      <li>Work</li>
      <li>Blog</li>
      <li>Contact</li>
    </ul>
  </StyledHeader>
)

export default Header
