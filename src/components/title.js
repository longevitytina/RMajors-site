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
        fluid={props.titleImage}
        alt="Robert headshot"
      />
      <div className={titleStyles.writingWrap}>
        <div>
          <h1 className={titleStyles.heading}>Events Planner and Consultant</h1>
          <p className={titleStyles.description}>
            Helping humans, one house at a time. Leading and organizing teams
            dedicated to community.
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
