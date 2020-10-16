import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Title from "../components/title"
import Projects from "../components/projects"
import SEO from "../components/seo"
import About from "../components/about"
import Testimonials from "../components/testimonials"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = ({ data: { titleImage, aboutImage } }) => (
  <Layout>
    <SEO title="Home" />
    <Title titleImage={titleImage.childImageSharp.fluid} />
    <Projects />
    <About aboutImage={aboutImage.childImageSharp.fluid} />
    <Testimonials />
  </Layout>
)

export default IndexPage

export const homeQuery = graphql`
  {
    titleImage: file(relativePath: { eq: "title1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutImage: file(relativePath: { eq: "music.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
