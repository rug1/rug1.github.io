import styled, { keyframes } from "styled-components"

import ChevronDownIcon from "../svgs/chevron-down.svg"

export const SectionContainer = styled.div`
  height: 100vh;
  background-color: ${props => props.colour};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const SectionHeading = styled.h1`
  font-size: ${props => props.theme.fontSize.font80};
  color: ${props => props.colour};
  margin-right: ${props => props.theme.spacing.lg};
  margin-left: ${props => props.theme.spacing.lg};

  @media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSize.font48};
  }
`

export const SectionSubHeading = styled.h2`
  font-size: ${props => props.theme.fontSize.font27};
  color: ${props => props.colour};
  margin-right: ${props => props.theme.spacing.lg};
  margin-left: ${props => props.theme.spacing.lg};

  @media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSize.font24};
  }
`

export const SectionText = styled.p`
  font-size: ${props => props.theme.fontSize.font24};
  line-height: 1.5em;
  color: ${props => props.colour};
  max-width: 1000px;
  margin: 0 ${props => props.theme.spacing.lg};

  @media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSize.font16};
  }
`

const FadeIn = keyframes`
  0%, 50%, 75% {
    opacity: 0;
  }
  100%  {
    opacity: 1;
  }
`

export const ScrollIcon = styled.div`
  position: absolute;
  bottom: 20px;
  animation: ${FadeIn} 4s;

  p {
    margin: 0;
    color: #ffffff;
    width: 50px;
    text-align: center;
  }
`

const Bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`

export const ChevronDown = styled(ChevronDownIcon)`
  width: 50px;
  height: 50px;
  stroke: #ffffff;
  animation: ${Bounce} 2s infinite;
  animation-delay: 5s;
`
