import React from "react"
import itemStyles from "./projectItem.module.css"
import Img from "gatsby-image"

export default function ProjectItem({ name, description, link }) {
  return (
    <figure>
      {/* <Img></Img> */}
      <div className={itemStyles.title}>{name}</div>
      <div className={itemStyles.description}>{description}</div>
      <a href={link} className={itemStyles.link}>
        View more
      </a>
    </figure>
  )
}
