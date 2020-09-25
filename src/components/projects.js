import React from "react"
import ProjectPreview from "./projectPreview"
import { DEFAULT_PROJECTS } from "./projectData"
import projectStyles from "./projects.module.css"
import { CardColumns, Accordion, Button } from "react-bootstrap"

export default function projects() {
  return (
    <div className={projectStyles.container}>
      <Accordion>
        <span className={projectStyles.heading} id="projects">
          Recent Work |
        </span>
        <Accordion.Toggle
          as={Button}
          className={projectStyles.accordion}
          variant="link"
          eventKey="0"
        >
          Click me!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <CardColumns className="pl-5 pr-5">
            {DEFAULT_PROJECTS.map((project, i) => (
              <ProjectPreview {...project} key={i} />
            ))}
          </CardColumns>
        </Accordion.Collapse>
      </Accordion>
    </div>
  )
}
