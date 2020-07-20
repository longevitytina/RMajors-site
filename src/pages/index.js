import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Title from "../components/title"
import Projects from "../components/projects"
import SEO from "../components/seo"
import About from "../components/about"
import Testimonials from "../components/testimonials"
import Layout from "../components/layout"

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
