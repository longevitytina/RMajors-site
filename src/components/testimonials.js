import React from "react"
import testimonialStyles from "./testimonials.module.css"
import { Carousel } from "react-bootstrap"
import background from "../images/background.jpg"
import { DEFAULT_TESTIMONIALS } from "./testimonialData"

export default function testimonials() {
  return (
    <div className={testimonialStyles.container}>
      <div className={testimonialStyles.heading} id="testimonials">
        "
      </div>

      <Carousel className={testimonialStyles.container}>
        {DEFAULT_TESTIMONIALS.map(({ name, description }, index) => (
          <Carousel.Item>
            <div className={testimonialStyles.carouselItem}>
              <p>
                {description}
                <br />-{name}
              </p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
