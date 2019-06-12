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
  render() {
    return (
      <Layout headerColour="#555b6e" pathname={this.props.location.pathname}>
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
