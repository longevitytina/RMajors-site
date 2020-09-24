import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import titleStyles from "./title.module.css"
import Img from "gatsby-image"

const Title = props => {
  return (
    <div className={titleStyles.container}>
      <Img
        className={titleStyles.avatar}
        fixed={props.titleImage}
        alt="Robert headshot"
      />
      <div className={titleStyles.writingWrap}>
        <div>
          <h1 className={titleStyles.name}>Events Planner and Consultant</h1>
          <p className={titleStyles.slogan}>
            Something descriptive about your job offering
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
