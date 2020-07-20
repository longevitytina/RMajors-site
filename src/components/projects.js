import React from "react"
import ProjectPreview from "./projectPreview"
import { DEFAULT_PROJECTS } from "./projectData"
import projectStyles from "./projects.module.css"
import { CardColumns } from "react-bootstrap"

export default function projects() {
  return (
    <div className={projectStyles.container}>
      <h1 className={projectStyles.heading} id="projects">
        Projects
      </h1>
      <CardColumns>
        {DEFAULT_PROJECTS.map((project, i) => (
          <ProjectPreview {...project} key={i} />
        ))}
      </CardColumns>
    </div>
  )
}
