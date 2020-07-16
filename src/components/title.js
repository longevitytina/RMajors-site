import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import titleStyles from "./title.module.css"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "filler2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={titleStyles.container}>
      <Img
        className={titleStyles.avatar}
        fluid={data.file.childImageSharp.fluid}
        alt="Robert headshot"
      />
      <div>
        <h1 className={titleStyles.name}>Robert Majors</h1>
        <p className={titleStyles.slogan}>Events Planner and Consultant</p>
        <div className={titleStyles.links}>
          <Link to="#about">About</Link>
          <Link to="#projects">Projects</Link>
          <Link to="#resume">Resumé</Link>
          <Link to="#testimonials">Testimonials</Link>
        </div>
      </div>
    </div>
  )
}
