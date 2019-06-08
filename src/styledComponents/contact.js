import styled, { css } from "styled-components"

import TwitterIcon from "../svgs/twitter.svg"
import LinkedInIcon from "../svgs/linkedin.svg"
import GitHubIcon from "../svgs/github.svg"
import EmailIcon from "../svgs/email.svg"

export const PageContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: -1;
  background-color: ${props => props.theme.colours.secondary};

  @media only screen and (max-width: 950px) {
    padding: ${props => props.theme.spacing.md};
  }
`

export const H1 = styled.h1`
  color: #ffffff;
  margin: 0;
  font-size: ${props => props.theme.fontSize.font80};
  margin-bottom: ${props => props.theme.spacing.xl};

  @media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSize.font48};
  }
`

export const H2 = styled.h2`
  color: ${props => props.theme.colours.tertiary};
  margin: 0;
  font-size: ${props => props.theme.fontSize.font36};
  margin-bottom: ${props => props.theme.spacing.md};

  @media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSize.font24};
  }
`

export const Circle = styled.div`
  border-radius: 100%;
  background-color: ${props => props.theme.colours.tertiary};
  width: 100px;
  height: 100px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.5s;
  margin: ${props => props.theme.spacing.md};

  &:hover {
    background-color: #ffffff;

    svg {
      stroke: ${props => props.theme.colours.primary};
    }
  }
`

const SocialMediaIconStyling = css`
  width: 40px;
  height: 40px;
  transition: stroke 0.5s;
  stroke: ${props => props.theme.colours.secondary};
`

export const Twitter = styled(TwitterIcon)`
  ${SocialMediaIconStyling}
`

export const LinkedIn = styled(LinkedInIcon)`
  ${SocialMediaIconStyling}
`

export const GitHub = styled(GitHubIcon)`
  ${SocialMediaIconStyling}
`

export const Email = styled(EmailIcon)`
  ${SocialMediaIconStyling}
`
