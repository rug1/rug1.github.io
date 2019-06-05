import React from "react"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  padding-left: 250px;

  @media only screen and (max-width: 950px) {
    padding-left: 0px;
  }
`

const HeroH1 = styled.h1`
  font-size: 130px;
  margin: 0;
  margin-bottom: 18px;
  color: #3e3839;
  display: inline-block;

  @media only screen and (max-width: 600px) {
    font-size: 90px;
  }
`

const HeroH2 = styled.h1`
  font-size: 50px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 18px;
  color: #3e3839;
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
    color: #3e3839;
  }
`

const Cursor = styled.span`
  font-weight: 100;
  font-size: ${props => (props.big ? "150px" : "70px")};
  color: #3e3839;
  vertical-align: text-bottom;
  animation: ${Blink} 1s step-end infinite;

  @media only screen and (max-width: 600px) {
    font-size: ${props => (props.big ? "90px" : "30px")};
  }
`

class IndexPage extends React.Component {
  state = { typeAnimationText: "", typeAnimationLineCount: 0 }

  typeAnimationLines = ["Hello.", "I’m Ruth Uwemedimo,", "software engineer"]

  componentDidMount() {
    this.typeAnimation(this.typeAnimationLines[0])
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.typeAnimationLineCount !== this.state.typeAnimationLineCount &&
      this.typeAnimationLines.length !== this.state.typeAnimationLineCount
    ) {
      this.typeAnimation(
        this.typeAnimationLines[this.state.typeAnimationLineCount]
      )
    }
  }

  typeAnimation = text => {
    const { typeAnimationText, typeAnimationLineCount } = this.state
    if (typeAnimationText.length !== text.length) {
      setTimeout(() => {
        this.setState({
          typeAnimationText: text.substring(0, typeAnimationText.length + 1),
        })
        this.typeAnimation(text, typeAnimationText.length + 1)
      }, 150)
    } else {
      setTimeout(() => {
        this.setState({
          typeAnimationText: "",
          typeAnimationLineCount: typeAnimationLineCount + 1,
        })
      }, 2000)
    }
  }

  renderText = lineNumber => {
    const { typeAnimationLineCount, typeAnimationText } = this.state

    return typeAnimationLineCount === lineNumber
      ? typeAnimationText
      : this.typeAnimationLines[lineNumber]
  }

  render() {
    const { typeAnimationLineCount } = this.state
    return (
      <Layout>
        <SEO title="Home" />
        <HeroContainer>
          <div>
            <HeroH1>{this.renderText(0)}</HeroH1>
            {typeAnimationLineCount === 0 && <Cursor big>|</Cursor>}
          </div>

          {typeAnimationLineCount >= 1 && (
            <div>
              <HeroH2>{this.renderText(1)}</HeroH2>
              {typeAnimationLineCount === 1 && <Cursor>|</Cursor>}
            </div>
          )}

          {typeAnimationLineCount >= 2 && (
            <div>
              <HeroH2>{this.renderText(2)}</HeroH2>
              {typeAnimationLineCount === 2 && <Cursor>|</Cursor>}
            </div>
          )}
        </HeroContainer>
      </Layout>
    )
  }
}

export default IndexPage
