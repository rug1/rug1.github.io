import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {
  PageContainer,
  H1,
  GridContainer,
  BlogImage,
  BlogText,
  BlogTitle as StyledBlogTitle,
  Featured,
  Hero,
} from "../styles/pages/blog"
import { blogPosts } from '../config/blog'

const BlogTitle = ({ post }) => {
  if (!post) return null;

  if (post.isFeatured) {
    return (
      <StyledBlogTitle hero={post.isHero}>
        <a href={post.link} target="_blank" rel="noopener noreferrer">
          {post.title}
        </a>
      </StyledBlogTitle>
    )
  }

  return (
    <StyledBlogTitle hero={post.isHero}>
      <Link to={post.link}>
        {post.title}
      </Link>
    </StyledBlogTitle>
  )
}

const Blog = props => {
  const heroPost = blogPosts.find((post) => post.isHero)
  const posts = blogPosts.filter((post) => !post.isHero)
  
  return (
    <Layout pathname={props.location.pathname}>
      <PageContainer>
        <H1>The Blog.</H1>
        <Hero>
          <BlogImage hero><img src={heroPost.image} alt=""></img></BlogImage>
          <div>
            {heroPost.date && (
              <BlogText>
                {heroPost.date}{heroPost.isFeatured && (<>  · <Featured>FEATURED</Featured></>)}
              </BlogText>
            )}
            <BlogTitle post={heroPost} />
            <BlogText>{heroPost.description}</BlogText>
          </div>
        </Hero>

        <GridContainer>
          {posts.map(post => (
            <div>
              <BlogImage><img src={post.image} alt="" /></BlogImage>
              <BlogText>
                {post.date}{post.isFeatured && (<>  · <Featured>FEATURED</Featured></>)}
              </BlogText>
              <BlogTitle post={post} />
              {post.description && <BlogText>{post.description}</BlogText>}
            </div>
          ))}
        </GridContainer>
      </PageContainer>
    </Layout>
  )
}

export default Blog

export const Head = () => (
  <SEO title="Blog" />
)
