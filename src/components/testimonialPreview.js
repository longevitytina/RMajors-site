import React from "react"
import itemStyles from "./projectPreview.module.css"
import { Card } from "react-bootstrap"

export default function projectPreview({
  data,
  name,
  description,
  link,
  image,
}) {
  return (
    <figure>
      <div className={itemStyles.title}>{name}</div>
      <div className={itemStyles.description}>{description}</div>
    </figure>
  )
}
