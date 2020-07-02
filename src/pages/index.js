import React from "react"
import { Link } from "gatsby"

import Title from "../components/title"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title />
  </Layout>
)

export default IndexPage
