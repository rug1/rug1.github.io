import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import TypeAnimation from "../components/TypeAnimation"
import { BackgroundImageContainer, HeadingContainer } from "../styles/pages/home"

const IndexPage = props => (
  <Layout pathname={props.location.pathname}>
    <SEO title="Home" />
    <BackgroundImageContainer />
    <HeadingContainer>
    <TypeAnimation
        text={["Hello.", "I’m Ruth Uwemedimo,", "software engineer."]}
      />
    </HeadingContainer>
  </Layout>
)

export default IndexPage
