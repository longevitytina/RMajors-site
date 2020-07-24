import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import aboutStyles from "./about.module.css"

export default () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      file(relativePath: { eq: "music.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={aboutStyles.container} id="about">
      <div className={aboutStyles.writingWrap}>
        <h1 className={aboutStyles.heading}>About</h1>
        <p className={aboutStyles.summary}>
          My name is Robert Majors, my life has been committed to discovering my
          passion and learning the best way to develop myself into the person I
          want to become. This has led me to a lot of humanitarian work and
          exposure to poorer communities, which includes my existing service to
          the poor in Las Vegas. The exposure I have had to the human need for
          sustainable housing is the source of my inspiration for my current
          endeavors in the study of engineering. I am an established resident of
          Nevada and a student at the University of Nevada Las Vegas. Skilled in
          design practices, Microsoft Office, AutoCad, engineering and
          construction concepts. I fill roles of leadership and teamwork in the
          community and in organizations including Engineers Without Borders,
          the Las Vegas Catholic Worker, Tau Beta Pi Honor Society, the Nevada
          Desert Experience and the American Society of Civil Engineers. There
          are many projects that I am proud to be a part of and I encourage
          others to reach out to me if they are interested in working on a
          project together.
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
