import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import aboutStyles from "./about.module.css"

export default () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      file(relativePath: { eq: "filler3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={aboutStyles.container}>
      <div className={aboutStyles.writingWrap}>
        <h1 className={aboutStyles.heading}>About</h1>
        <p className={aboutStyles.summary}>
          Lomo skateboard glossier butcher flannel actually selfies four loko,
          disrupt listicle retro. Bitters jianbing mixtape affogato schlitz.
          Meditation forage kale chips, seitan flannel affogato wayfarers.
          Butcher meditation la croix pabst chambray drinking vinegar knausgaard
          intelligentsia. Sriracha franzen asymmetrical hot chicken kinfolk four
          loko cray, occupy leggings brooklyn.
        </p>
      </div>
      <Img
        className={aboutStyles.avatar}
        fluid={data.file.childImageSharp.fluid}
        alt="Robert headshot"
      />
    </div>
  )
}
