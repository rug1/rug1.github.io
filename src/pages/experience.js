import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  SectionContainer,
  SectionHeading,
  SectionSubHeading,
  SectionText,
  ScrollIcon,
  ChevronDown,
} from "../styledComponents/experience"

class Experience extends React.Component {
  state = { height: 0, headerColour: "#555b6e", headerTextColour: "#ffffff" }

  // handleScroll = () => {
  //   const windowHeight = this.state.height
  //   const sectionOneBreakpoint = windowHeight - 75
  //   const sectionTwoBreakpoint = windowHeight * 2 - 75
  //   const sectionThreeBreakpoint = windowHeight * 3 - 75
  //   const sectionFourBreakpoint = windowHeight * 4 - 75
  //   const sectionFiveBreakpoint = windowHeight * 5 - 75

  //   const sectionOne =
  //     window.scrollY > 0 && window.scrollY < sectionOneBreakpoint
  //   const sectionTwo =
  //     window.scrollY > sectionOneBreakpoint &&
  //     window.scrollY < sectionTwoBreakpoint
  //   const sectionThree =
  //     window.scrollY > sectionTwoBreakpoint &&
  //     window.scrollY < sectionThreeBreakpoint
  //   const sectionFour =
  //     window.scrollY > sectionThreeBreakpoint &&
  //     window.scrollY < sectionFourBreakpoint
  //   const sectionFive =
  //     window.scrollY > sectionFourBreakpoint &&
  //     window.scrollY < sectionFiveBreakpoint

  //   if (sectionOne) {
  //     this.setState({ headerColour: "#555b6e", headerTextColour: "#ffffff" })
  //   } else if (sectionTwo) {
  //     this.setState({ headerColour: "#ECDBFF", headerTextColour: "#7948B2" })
  //   } else if (sectionThree) {
  //     this.setState({ headerColour: "#AC29B5", headerTextColour: "#ffffff" })
  //   } else if (sectionFour) {
  //     this.setState({ headerColour: "#ccd6e2", headerTextColour: "#000000" })
  //   } else if (sectionFive) {
  //     this.setState({ headerColour: "#121212", headerTextColour: "#ffffff" })
  //   }
  // }

  componentDidMount() {
    this.updateWindowDimensions()
    // window.addEventListener("resize", this.updateWindowDimensions)
    // document.addEventListener("scroll", this.handleScroll)
  }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateWindowDimensions)
  // }

  updateWindowDimensions = () => {
    this.setState({ height: window.innerHeight })
  }

  render() {
    return (
      <Layout
        headerColour={this.state.headerColour}
        headerTextColour={this.state.headerTextColour}
        pathname={this.props.location.pathname}
      >
        <SEO title="Experience" />

        <SectionContainer colour="#555b6e">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce
            style={{ marginBottom: "52px" }}
          >
            <SectionHeading colour="#ffffff">Experience</SectionHeading>
            <SectionText colour="#ccd6e2">
              Software engineer who’s always learning new technologies and
              keeping up to date with the recent tech trends and best practices.
              Experience with React and GraphQL, I focus on ways to improve
              consistency and reusability on the frontend. Passionate about
              accessibility.
            </SectionText>
          </ScrollAnimation>
          <ScrollIcon>
            <ChevronDown />
            <p>scroll</p>
          </ScrollIcon>
        </SectionContainer>

        <SectionContainer colour="#ECDBFF">
          <ScrollAnimation animateIn="fadeIn" offset={500}>
            <SectionHeading colour="#7948B2">Personably</SectionHeading>
            <SectionSubHeading colour="#7948B2">
              Software Engineer, Feb 2017–present
            </SectionSubHeading>
            <SectionText colour="#4d4d4d">
              Joining Personably as the first employee, I have been able to
              experience all the stages of an early stage startup from the
              beginning. Working closely with the CTO, I contributed across the
              whole codebase which included React, GraphQL and Node.js. I worked
              with the design team to create a component library that I
              summarised in a{" "}
              <a
                href="https://www.personably.co/blog/the-story-of-building-macaw-ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                blog post
              </a>
              . Also writing Personably’s most visited{" "}
              <a
                href="https://www.personably.co/blog/cypress-tests-continuous-integration"
                target="_blank"
                rel="noopener noreferrer"
              >
                blog post
              </a>{" "}
              on how we achieved running Cypress tests in Continuous
              Integration.
            </SectionText>
          </ScrollAnimation>
        </SectionContainer>

        <SectionContainer animateIn="fadeIn" colour="#AC29B5">
          <ScrollAnimation animateIn="fadeIn" offset={500}>
            <SectionHeading colour="#ffffff">JustGiving</SectionHeading>
            <SectionSubHeading colour="#ffffff">
              Junior Frontend Developer, April 2016–Feb 2017
            </SectionSubHeading>
            <SectionText colour="#ffffff">
              Solely focused on frontend development, working in an agile
              software environment with product managers, designers and senior
              frontend developers to build projects in React, Redux and
              TypeScript.
            </SectionText>
          </ScrollAnimation>
        </SectionContainer>

        <SectionContainer animateIn="fadeIn" colour="#ccd6e2">
          <ScrollAnimation animateIn="fadeIn" offset={500}>
            <SectionHeading colour="#000000">Freelance</SectionHeading>
            <SectionSubHeading colour="#000000">
              Full Stack Developer, Aug 2016–March 2017
            </SectionSubHeading>
            <SectionText colour="#555b6e">
              As an independent freelancer I worked on larger and more
              challenging projects including a 3 month contract for Indigo (now
              Juno) and a 2 month contract for WCRS which required me to work at
              the client’s offices in California for 2 weeks. As well as many
              other smaller contracts.
            </SectionText>
          </ScrollAnimation>
        </SectionContainer>

        <SectionContainer animateIn="fadeIn" colour="#121212">
          <ScrollAnimation animateIn="fadeIn" offset={500}>
            <SectionHeading colour="#ffffff">
              Founders and Coders
            </SectionHeading>
            <SectionSubHeading colour="#ffffff">
              Full Stack JavaScript Developer, Aug 2015–Aug 2016
            </SectionSubHeading>
            <SectionText colour="#ffffff">
              Joining the 6th cohort of Founders and Coders, I completed a three
              month intensive full stack JavaScript course. By the end of the
              programme, I built up more than 1000 hours of developer time and
              had a solid foundation in full stack. I then went on to join the
              Founders and Coders freelance cooperative working on MVP projects
              using a range of technologies.
            </SectionText>
          </ScrollAnimation>
        </SectionContainer>
      </Layout>
    )
  }
}

export default Experience
