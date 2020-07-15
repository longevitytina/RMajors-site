import React from "react"
import Title from "../components/title"
import Projects from "../components/projects"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Testimonials from "../components/testimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title />
    <About />
    <Projects />
    <Testimonials />
  </Layout>
)

export default IndexPage
