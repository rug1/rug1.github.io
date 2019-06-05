import styled, { keyframes } from "styled-components"

export const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: ${props => (props.two ? "flex-start" : "flex-end")};
  flex-direction: column;
  padding: 60px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: 25% 40%;

  @media only screen and (max-width: 950px) {
    padding: 20px;
  }
`

export const HeroH1 = styled.h1`
  font-size: 130px;
  margin: 0;
  color: #ffffff;
  display: inline-block;

  @media only screen and (max-width: 600px) {
    font-size: 90px;
  }
`

export const HeroH2 = styled.h1`
  font-size: 50px;
  font-weight: 400;
  margin: 0;
  color: #ffffff;
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
    color: #ffffff;
  }
`

export const Cursor = styled.span`
  font-weight: 100;
  font-size: ${props => (props.big ? "150px" : "50px")};
  color: #ffffff;
  vertical-align: super;
  animation: ${Blink} 1s step-end infinite;

  @media only screen and (max-width: 600px) {
    font-size: ${props => (props.big ? "90px" : "30px")};
  }
`
