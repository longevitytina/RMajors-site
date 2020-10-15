import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import titleStyles from "./title.module.css"
import Img from "gatsby-image/withIEPolyfill"
// import BackgroundImage from "gatsby-background-image"

const Title = props => {
  return (
    <div className={titleStyles.container}>
      <Img
        className={titleStyles.avatar}
        objectFit="cover"
        objectPosition="98% 5%"
        fluid={props.titleImage}
        alt="Robert headshot"
      />
      <div className={titleStyles.writingWrap}>
        <div>
          <h1 className={titleStyles.heading}>Events Planner and Consultant</h1>
          <p className={titleStyles.description}>
            Something descriptive about your job offering. Lucas ipsum dolor sit
            amet utapau wedge yoda hoth baba utapau kashyyyk skywalker yoda
            chewbacca. Watto solo fett mon. Hutt watto hutt aayla. Mara bespin
            solo kessel gamorrean anakin. Solo sebulba palpatine ewok vader
            solo. Obi-wan amidala solo antilles darth. Vader binks fett ponda
          </p>
          {/* <div className={titleStyles.links}>
          <Link to="#about">About</Link>
          <Link to="#projects">Projects</Link>
          <Link to="#resume">Resumé</Link>
          <Link to="#testimonials">Testimonials</Link>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default Title
