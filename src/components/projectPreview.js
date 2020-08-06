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
    </Card>
  )
}
