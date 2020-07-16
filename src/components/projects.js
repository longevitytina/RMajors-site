import React from "react"
import ProjectPreview from "./projectPreview"
import { DEFAULT_PROJECTS } from "./projectData"
import projectStyles from "./projects.module.css"

export default function projects() {
  return (
    <div>
      <h1 className={projectStyles.heading} id="projects">
        Projects
      </h1>
      <div className={projectStyles.container}>
        {DEFAULT_PROJECTS.map((project, i) => (
          <ProjectPreview {...project} key={i} />
        ))}
      </div>
    </div>
  )
}
