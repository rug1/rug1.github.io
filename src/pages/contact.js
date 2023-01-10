import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import {
  PageContainer,
  H1,
  H2,
  Circle,
  Twitter,
  LinkedIn,
  GitHub,
  Email,
} from "../styles/pages/contact"

const Contact = props => (
  <Layout pathname={props.location.pathname}>
    <PageContainer>
      <H1>Say hi....</H1>
      <H2>You can find me at</H2>
      <div style={{ textAlign: "center" }}>
        <a
          href="https://www.linkedin.com/in/ruth-uwemedimo-694228a1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Circle>
            <LinkedIn />
          </Circle>
        </a>
        <a
          href="https://github.com/rug1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Circle>
            <GitHub />
          </Circle>
        </a>
        <a href="mailto:ruth.uwemedimo@gmail.com">
          <Circle>
            <Email />
          </Circle>
        </a>
        <a
          href="https://twitter.com/RuthUwemedimo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Circle>
            <Twitter />
          </Circle>
        </a>
      </div>
    </PageContainer>
  </Layout>
)

export default Contact

export const Head = () => (
  <SEO title="Contact" />
)