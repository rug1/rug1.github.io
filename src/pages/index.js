import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import TypeAnimation from "../components/TypeAnimation"
import { PageContainer } from "../styles/pages/home"

const IndexPage = props => (
  <Layout pathname={props.location.pathname}>
    <SEO title="Home" />
    <PageContainer>
      <TypeAnimation
        text={["Hello.", "I’m Ruth Uwemedimo,", "software engineer."]}
      />
    </PageContainer>
  </Layout>
)

export default IndexPage
