import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  PageContainer,
  H1,
  GridContainer,
  BlogImage,
  BlogText,
  BlogTitle,
  Featured,
  Hero,
} from "../styledComponents/blog"
import SheCanCodeProfile from "../images/ruth.jpg"

const Blog = props => {


  return (
    <Layout pathname={props.location.pathname} headerColour="#555b6e">
      <SEO title="Blog" />
      <PageContainer>
        <H1>The Blog.</H1>
        <Hero>
          <BlogImage hero><img src={SheCanCodeProfile}></img></BlogImage>
          <div>
            <BlogText>July 10, 2020  · <Featured>FEATURED</Featured></BlogText>
            <a href="https://shecancode.io/blog/meet-ruth-uwemedimo-senior-software-engineer-at-lantum" target="_blank" rel="noopener noreferrer">
              <BlogTitle hero>Meet Ruth Uwemedimo, Senior Software Engineer at Lantum</BlogTitle>
            </a>
            <BlogText>We recently caught up with Ruth Uwemedimo, Senior Software Engineer at Lantum. In this brilliant interview, Ruth shares
            a whole host of valuable resources to help budding software developers understand how to start their careers in tech.</BlogText>
          </div>
        </Hero>

        <GridContainer>
          <div>
            <BlogImage><img src="https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" /></BlogImage>
            <BlogText>Jun 29, 2020</BlogText>
            <BlogTitle>Top tips to finding your way around a new codebase</BlogTitle>
            <BlogText>Almost a year ago, I joined Lantum: a company with a mission to save the NHS £1 billion in staffing agency fees.
            The team at Lantum are great, and everyone is so welcoming to new joiners, which helped me enormously to feel comfortable in my new role as a Senior Frontend Engineer...</BlogText>
          </div>

          <div>
            <BlogImage><img src="https://miro.medium.com/max/4000/1*GGSwLXhkkySIwm0wisRfGA.jpeg" /></BlogImage>
            <BlogText>May 13, 2019</BlogText>
            <BlogTitle>Alex and Ruth go to events: ReactJS Girls Conference 2019</BlogTitle>
            <BlogText>Alex and Ruth: The two of us were really excited to go to the conference together. We’re at very different
            stages of learning but the ReactJS Girls Conference is open to all those interested in JavaScript and React...</BlogText>
          </div>

          <div>
            <BlogImage><img src="https://miro.medium.com/max/1400/1*CFsleI3iunHMeZtIVq0fSQ.jpeg" /></BlogImage>
            <BlogText>Dec 18, 2018 · <Featured>FEATURED</Featured></BlogText>
            <a href="https://medium.com/free-code-camp/how-two-friends-changed-careers-learned-to-code-and-built-a-startup-e40c0b060de8" target="_blank" rel="noopener noreferrer">
              <BlogTitle>How two friends changed careers, learned to code, and built a startup</BlogTitle>
            </a>
            <BlogText>Katerina Pascoulis and Ruth Uwemedimo talk about what they learned from freelancing 
            and why they love working together at Personably.</BlogText>
          </div>

          <div>
            <BlogImage><img src="https://miro.medium.com/max/1400/1*Wq6c-ZFeimwPTgmrXtY6wA.jpeg" /></BlogImage>
            <BlogText>Oct 4, 2018</BlogText>
            <BlogTitle>The story of building Macaw UI</BlogTitle>
            <BlogText>We now have our own component library — Macaw UI, which is how we’ll be keeping our 
            design and brand consistent throughout our product...</BlogText>
          </div>

          <div>
            <BlogImage><img src="https://miro.medium.com/max/7776/1*z7aahOChZZxNfMInuGUN4w.jpeg" /></BlogImage>
            <BlogText>Apr 26, 2018</BlogText>
            <BlogTitle>How we got Cypress running solid tests in Continuous Integration</BlogTitle>
            <BlogText>It was time to start writing end to end tests for Personably. We wanted to maintain
             a smooth UX and save our users from experiencing broken flows...</BlogText>
          </div>
        </GridContainer>
      </PageContainer>
    </Layout>
  )
}

export default Blog
