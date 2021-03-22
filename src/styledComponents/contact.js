import styled, { css } from "styled-components"

import TwitterIcon from "../svgs/twitter.svg"
import LinkedInIcon from "../svgs/linkedin.svg"
import GitHubIcon from "../svgs/github.svg"
import EmailIcon from "../svgs/email.svg"

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 100px);
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 950px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`

export const H1 = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.font80};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media only screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.font48};
  }
`

export const H2 = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.font36};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media only screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.font24};
  }
`

export const Circle = styled.div`
  border-radius: 100%;
  width: 100px;
  height: 100px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.5s;
  margin: ${({ theme }) => theme.spacing.md};

  &:hover {
    background-color: ${({ theme }) => theme.colours.darkest};

    svg {
      stroke: ${({ theme }) => theme.colours.lightest};
    }
  }
`

const SocialMediaIconStyling = css`
  width: 40px;
  height: 40px;
  transition: stroke 0.5s;
  stroke: ${({ theme }) => theme.colours.darkest};
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
