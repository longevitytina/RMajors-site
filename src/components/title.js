import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import titleStyles from "./title.module.css"

export default function title() {
  return (
    <div className={titleStyles.container}>
      <Image className={titleStyles.avatar} />
      <div>
        <h1 className={titleStyles.name}>Robert Majors</h1>
        <p className={titleStyles.slogan}>Events Planner and Consultant</p>
        <div className={titleStyles.links}>
          <Link to="#">About</Link>
          <Link to="#">Projects</Link>
          <Link to="#">Resumé</Link>
        </div>
      </div>
    </div>
  )
}
