import styled from "styled-components"

export const PageContainer = styled.div`
  padding: 120px ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colours.secondary};
  text-align: center;
  min-height: 100vh;

  @media only screen and (max-width: 600px) {
    padding: 120px ${props => props.theme.spacing.md};
  }
`

export const H2 = styled.h2`
  color: #ffffff;
  margin-top: ${props => props.theme.spacing.xxl};
  margin-bottom: ${props => props.theme.spacing.lg};
  font-size: ${props => props.theme.fontSize.font48};
  text-align: left;

  @media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSize.font36};
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  grid-gap: 30px;
`

export const Card = styled.div`
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px 1px #2d2d30;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 3px 5px 3px #2d2d30;
  }
`

export const BlogLink = styled.a.attrs(props => ({
  href: `https://medium.com/@ruthuwemedimo/${props.slug}`,
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  text-decoration: none;
  color: #000000;

  p {
    margin: ${props => props.theme.spacing.lg};
    font-size: ${props => props.theme.fontSize.font19};
  }
`

export const BlogImage = styled.div`
  background: ${props =>
    `url(https://cdn-images-1.medium.com/${props.image}) center`};
  background-size: cover;
  border-radius: 8px 8px 0 0;
  height: 100%;
  left: 0;
  max-height: 240px;
  position: absolute;
  top: 0;
  width: 100%;
`
