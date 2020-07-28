import React from "react"
import itemStyles from "./projectPreview.module.css"
import { Card, Button } from "react-bootstrap"

export default function projectPreview({
  data,
  name,
  description,
  link,
  image,
}) {
  return (
    <Card className={itemStyles.container}>
      <Card.Img src={image} className={itemStyles.image} />
      <Button variant="secondary" size="lg" block className={itemStyles.button}>
        {name}
      </Button>{" "}
      {/* // <img src={image} alt={name} className={itemStyles.image} /> */}
      {/* <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body> */}
      {/* <div className={itemStyles.title}>{name}</div> */}
      {/* <div className={itemStyles.description}>{description}</div> */}
      {/* <a href={link} className={itemStyles.link}> */}
      {/* View more */}
      {/* </a> */}
    </Card>
  )
}
