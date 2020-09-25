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
      <a href={link}>
        <img src={image} className={itemStyles.image} />
        <div className={itemStyles.overlay}>
          <div className={itemStyles.projectName}>{name}</div>
        </div>
      </a>
    </Card>
  )
}
/* <Button
  variant="secondary"
  size="lg"
  block
  className={[itemStyles.button, "stretched-link"].join(" ")}
  href={link}
>
  {name}
</Button>{" "} */
// <div className="media position">
//   <Card className={itemStyles.container}>
//     <Card.Img src={image} className={itemStyles.image} />
//     <a
//       href={link}
//       className={[itemStyles.stretchedLink, "stretched-link"].join(" ")}
//     >
//       {name}
//     </a>
//   </Card>
// </div>

// {
//   style.style1 + " " + style.style2
// }
// {
//   ;`class1 ${class2}`
// }
// {
//   ;[activeClass, data.klass, "main-class"].join(" ")
// }

// <Card className={itemStyles.container}>
//   <Card.Img src={image} className={itemStyles.image} />
//   <a href={link}>{name}</a>
// </Card>
