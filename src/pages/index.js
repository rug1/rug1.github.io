import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TypeAnimation from "../components/typeAnimation"
import { HeroContainer } from "../styledComponents/home"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <HeroContainer>
          <TypeAnimation
            text={["Hello.", "I’m Ruth Uwemedimo,", "software engineer."]}
          />
        </HeroContainer>
      </Layout>
    )
  }
}

export default IndexPage
