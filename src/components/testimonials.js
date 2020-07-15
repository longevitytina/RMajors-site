import React from "react"
import ProjectItem from "./projectItem"
import { DEFAULT_TESTIMONIALS } from "./testimonialData"
// import testimonialStyles from "./testimonial.module.css"
import projectStyles from "./projects.module.css"

export default function testimonials() {
  return (
    <div>
      <h1 className={projectStyles.heading}>Testimonials</h1>
      <div className={projectStyles.container}>
        {DEFAULT_TESTIMONIALS.map((project, i) => (
          <ProjectItem {...project} key={i} />
        ))}
      </div>
    </div>
  )
}
