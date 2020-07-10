import React from "react"
import ProjectItem from "./projectItem"
import { DEFAULT_PROJECTS } from "./projectData"
import projectStyles from "./projects.module.css"

export default function projects() {
  return (
    <div>
      {/* <h1 className={projectStyles.header}>Projects</h1> */}
      <div className={projectStyles.container}>
        {DEFAULT_PROJECTS.map((project, i) => (
          <ProjectItem {...project} key={i} />
        ))}
      </div>
    </div>
  )
}
