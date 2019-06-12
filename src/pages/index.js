import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TypeAnimation from "../components/typeAnimation"
import { PageContainer } from "../styledComponents/home"

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
