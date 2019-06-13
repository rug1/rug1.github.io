import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  PageContainer,
  H2,
  GridContainer,
  Card,
  BlogLink,
  BlogImage,
} from "../styledComponents/blog"

const Blog = props => {
  const posts = props.data.posts.edges
  const featured = props.data.featured

  return (
    <Layout pathname={props.location.pathname} headerColour="#555b6e">
      <SEO title="Blog" />
      <PageContainer>
        <GridContainer>
          {posts.map(post => (
            <Card key={post.node.id}>
              <BlogLink slug={post.node.uniqueSlug}>
                <BlogImage image={post.node.virtuals.previewImage.imageId} />
                <div style={{ height: "240px", width: "100%" }} />
                <p>{post.node.title}</p>
              </BlogLink>
            </Card>
          ))}
        </GridContainer>

        <H2>Featured</H2>
        <GridContainer>
          <Card key={featured.id}>
            <BlogLink slug={featured.uniqueSlug}>
              <BlogImage image={featured.virtuals.previewImage.imageId} />
              <div style={{ height: "240px", width: "100%" }} />
              <p>{featured.title}</p>
              <p style={{ fontSize: "16px", color: "#555b6e" }}>
                {featured.author.name}
              </p>
            </BlogLink>
          </Card>
        </GridContainer>
      </PageContainer>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    posts: allMediumPost(
      sort: { fields: [createdAt], order: DESC }
      filter: { author: { id: { eq: "9ee08197-8f5a-5e10-9dfc-a348601af133" } } }
    ) {
      edges {
        node {
          id
          uniqueSlug
          title
          virtuals {
            previewImage {
              imageId
            }
          }
        }
      }
    }
    featured: mediumPost(id: { eq: "41b8a822-4cd2-5add-85fe-740afafcf77f" }) {
      id
      uniqueSlug
      title
      author {
        id
        name
      }
      virtuals {
        previewImage {
          imageId
        }
      }
    }
  }
`
