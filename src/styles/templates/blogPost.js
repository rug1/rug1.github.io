import styled, { css } from 'styled-components'

import { VIEW_HEIGHT } from '../global'

const MAX_HEIGHT = '850px';
const MAX_WIDTH = '770px';
const MEDIUM_BREAKPOINT = '1200px'
const SMALL_BREAKPOINT = '1000px'

const backgroundImage = css`
  content: " ";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: url("${({ image }) => image}");
  background-repeat: no-repeat;
  background-size: cover;
  height: inherit;
  background-position: center;
`

const smallHeroContent = css`
  padding: 0 ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.lg} auto;
  width: 100%;
  max-width: ${MAX_WIDTH};
`

export const Hero = styled.div`
  position: relative;
  height: ${VIEW_HEIGHT};
  max-height: ${MAX_HEIGHT};

  @media only screen and (max-width: ${SMALL_BREAKPOINT}) {
    height: initial;
  }

  &:before {
    ${backgroundImage};
    max-height: ${MAX_HEIGHT};
    opacity: 0.85;
    box-shadow: inset 1300px 0 150px -550px ${({ theme }) => theme.bodyColour};

    @media only screen and (max-width: ${MEDIUM_BREAKPOINT}) {
      box-shadow: inset 1200px 0 150px -550px ${({ theme }) => theme.bodyColour};
    }

    @media only screen and (max-width: ${SMALL_BREAKPOINT}) {
      display: none;
    }
  }
`

export const HeroImage = styled.div`
  display: none;
  height: 350px;

  @media only screen and (max-width: ${SMALL_BREAKPOINT}) {
    display: block;
    position: relative;

    &:before {
      ${backgroundImage};
    }
  }
`

export const HeroContent = styled.div`
  height: inherit;
  max-height: ${MAX_HEIGHT};  
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 120px;
  width: 600px;
  position: relative;

  @media only screen and (max-width: ${MEDIUM_BREAKPOINT}) {
    width: 500px;
  }

  @media only screen and (max-width: ${SMALL_BREAKPOINT}) {
    padding: 0;
    width: 100%;
  }
`

export const H1 = styled.h1`
  font-size: 7vmin;
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media only screen and (max-width: ${SMALL_BREAKPOINT}) {
    ${smallHeroContent};
  }
`

export const AuthorTag = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${SMALL_BREAKPOINT}) {
    ${smallHeroContent};
    margin-bottom: 0px;
  }
`

export const Author = styled.p`
  font-size: ${({theme}) => theme.fontSize.font19};
  font-weight: bold;
  color: ${({theme}) => theme.colours.light};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

export const Date = styled.p`
  font-size: ${({theme}) => theme.fontSize.font14};
  margin: 0;
`

export const AuthorImg = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 100%;
  border: 2px solid ${({theme}) => theme.colours.light};
  padding: ${({ theme }) => theme.spacing.xxs};
  margin-right: ${({ theme }) => theme.spacing.md};
`

export const ContentWrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.sm}`};
  max-width: ${MAX_WIDTH};
  margin: 0 auto;

  p, li {
    line-height: 24px;
  }

  p:first-child {
    font-size: 1.2em;
    line-height: 28px;
  }

  h2 {
    line-height: 32px;
    margin-top: ${({ theme }) => theme.spacing.xl};
  }

  img {
    width: 100%;
  }

  pre {
    line-height: 20px;
    background: ${({theme}) => theme.colours.black};
    color: ${({theme}) => theme.colours.white};
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: 10px;

    code {
      background: ${({theme}) => theme.colours.black};
      color: ${({theme}) => theme.colours.white};
      overflow-x: scroll;
      display: block;  
    }
  }

  code {
    background: #eaeaea;
    color: ${({theme}) => theme.colours.black};
    padding: ${({ theme }) => `2px ${theme.spacing.xxs}`};
    border-radius: 3px;
  }
`