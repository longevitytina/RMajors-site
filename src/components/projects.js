import React from "react"
import ProjectItem from "./projectItem"
import projectStyles from "./projects.module.css"

export default function projects({ projects }) {
  return (
    <div>
      {/* <h1 className={projectStyles.header}>Projects</h1> */}
      <div className={projectStyles.container}>
        {projects.map((project, i) => (
          <ProjectItem {...project} key={i} />
        ))}
      </div>
    </div>
  )
}
