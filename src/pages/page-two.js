import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePage from "../components/home"
import imgTwo from "../images/c.jpg"

const PageTwo = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage image={imgTwo} two />
  </Layout>
)

export default PageTwo
