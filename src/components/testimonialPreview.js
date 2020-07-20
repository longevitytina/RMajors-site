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
      <img src={image} alt={name} className={itemStyles.image} />
      <div className={itemStyles.title}>{name}</div>
      <div className={itemStyles.description}>{description}</div>
      <a href={link} className={itemStyles.link}>
        View more
      </a>
    </figure>
  )
}
