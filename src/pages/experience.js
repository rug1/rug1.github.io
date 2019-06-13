import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SectionContainer = styled.div`
  height: 100vh;
  background-color: ${props => props.colour};
  display: flex;
  justify-content: center;
  align-items: center;
`

const SectionHeading = styled.h1`
  font-size: ${props => props.theme.fontSize.font80};
  color: ${props => props.colour};
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSize.font48};
  }
`

class Experience extends React.Component {
  state = { height: 0, headerColour: "#555b6e", headerTextColour: "#ffffff" }

  handleScroll = () => {
    const windowHeight = this.state.height - 1
    const sectionOne = window.scrollY > 0 && window.scrollY < windowHeight
    const sectionTwo =
      window.scrollY > windowHeight && window.scrollY < windowHeight * 2
    const sectionThree =
      window.scrollY > windowHeight * 2 && window.scrollY < windowHeight * 3
    const sectionFour =
      window.scrollY > windowHeight * 3 && window.scrollY < windowHeight * 4
    const sectionFive =
      window.scrollY > windowHeight * 4 && window.scrollY < windowHeight * 5

    if (sectionOne) {
      this.setState({ headerColour: "#555b6e", headerTextColour: "#ffffff" })
    } else if (sectionTwo) {
      this.setState({ headerColour: "#ECDBFF", headerTextColour: "#7948B2" })
    } else if (sectionThree) {
      this.setState({ headerColour: "#AC29B5", headerTextColour: "#ffffff" })
    } else if (sectionFour) {
      this.setState({ headerColour: "#ccd6e2", headerTextColour: "#000000" })
    } else if (sectionFive) {
      this.setState({ headerColour: "#121212", headerTextColour: "#ffffff" })
    }
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
    document.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ height: window.innerHeight })
  }

  render() {
    return (
      <Layout
        headerColour={this.state.headerColour}
        headerTextColour={this.state.headerTextColour}
        pathname={this.props.location.pathname}
      >
        <SEO title="Experience" />

        <SectionContainer colour="#555b6e">
          <SectionHeading colour="#ffffff">Experience</SectionHeading>
        </SectionContainer>

        <SectionContainer colour="#ECDBFF">
          <SectionHeading colour="#7948B2">Personably</SectionHeading>
        </SectionContainer>

        <SectionContainer colour="#AC29B5">
          <SectionHeading colour="#ffffff">JustGiving</SectionHeading>
        </SectionContainer>

        <SectionContainer colour="#ccd6e2">
          <SectionHeading colour="#000000">Freelance</SectionHeading>
        </SectionContainer>

        <SectionContainer colour="#121212">
          <SectionHeading colour="#ffffff">Founders and Coders</SectionHeading>
        </SectionContainer>
      </Layout>
    )
  }
}

export default Experience
