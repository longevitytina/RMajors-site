import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

export default function title() {
  return (
    <div>
      <h1 class="main-name">Robert Majors</h1>
      <p class="tag-line">Events Planner and Consultant</p>
      <div
        class="avatar"
        style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
      >
        <Image />
      </div>
      <Link to="#">About</Link> <br />
      <Link to="#">Projects</Link>
    </div>
  )
}
