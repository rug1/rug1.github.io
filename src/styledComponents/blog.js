import styled from "styled-components"

export const PageContainer = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.sm};
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: ${props => props.theme.spacing.xl};
`

export const H1 = styled.h1`
  margin-top: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
  font-size: ${props => props.theme.fontSize.font80};

  @media only screen and (max-width: 420px) {
    font-size: ${props => props.theme.fontSize.font64};
  }
`

export const BlogImage = styled.div`
  height: ${({ hero }) => hero ? '400px' : '200px'};
  max-width: 550px;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    border-radius: 10px;
  }
`

export const BlogText = styled.p`
  font-size: ${props => props.theme.fontSize.font14};
  line-height: 18px;
`

export const BlogTitle = styled.h2`
  font-size: ${({ theme, hero }) => hero ? theme.fontSize.font36 : theme.fontSize.font24};
  cursor: pointer;
  text-decoration: none;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Featured = styled.span`
  color: ${({ theme }) => theme.colours.light};
  font-weight: bold;
`

export const Hero = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${props => props.theme.spacing.xl};

  div:last-child {
    margin-left: ${props => props.theme.spacing.lg};
  }

  @media only screen and (max-width: 950px) {
    flex-direction: column;

    div:last-child {
      margin-left: 0;
    }
  }
`