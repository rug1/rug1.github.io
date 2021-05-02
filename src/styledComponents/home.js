import styled, { keyframes } from "styled-components"
import profile from "../images/profile.jpg"

export const PageContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  justify-content: flex-end;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.lg};
  background-image: url(${profile});
  background-size: cover;
  background-position: 35% 40%;
  z-index: -1;

  @media only screen and (max-width: 950px) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.sm}`};
  }
`

export const HeroH1 = styled.h1`
  font-size: 130px;
  margin: 0;
  color: ${({ theme }) => theme.colours.white};
  display: inline-block;

  @media only screen and (max-width: 600px) {
    font-size: 90px;
  }
`

export const HeroH2 = styled.h2`
  font-size: 50px;
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme.colours.white};
  display: inline-block;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`

const Blink = keyframes`
  from, to {
    color: transparent;
  }
  50% {
    color: ${({ theme }) => theme.colours.white};
  }
`

export const Cursor = styled.span`
  font-weight: 100;
  font-size: ${props => (props.big ? "150px" : "50px")};
  color: ${({ theme }) => theme.colours.white};
  vertical-align: super;
  animation: ${Blink} 1s step-end infinite;

  @media only screen and (max-width: 600px) {
    font-size: ${props => (props.big ? "90px" : "30px")};
  }
`
