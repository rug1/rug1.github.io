import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Photo from "../images/profile.jpg"

import {
  Hero,
  HeroImage,
  HeroContent,
  H1,
  AuthorTag,
  Author,
  AuthorImg,
  Date,
  ContentWrapper
} from '../styledComponents/blogTemplate'

export default function Template({
  data,
  location,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout pathname={location.pathname}>
      <SEO title="Blog" />
      <Hero image={frontmatter.image}>
        <HeroContent>
          <H1>{frontmatter.title}</H1>
          <HeroImage image={frontmatter.image} />
          <AuthorTag>
            <AuthorImg src={Photo} />
            <div>
              <Author>Ruth Uwemedimo</Author>
              <Date>{frontmatter.date}</Date>
            </div>
          </AuthorTag>
        </HeroContent>
      </Hero>

      <ContentWrapper>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </ContentWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        image
      }
    }
  }
`