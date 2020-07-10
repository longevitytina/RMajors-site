import React from "react"
import Title from "../components/title"
import PropTypes from "prop-types"
import Projects from "../components/projects"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Title />
    <Projects projects={data.projectDataJson.projects} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}
export default IndexPage

export const query = graphql`
  query projectsQuery {
    projectJson {
      projects {
        name
        description
        link
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
