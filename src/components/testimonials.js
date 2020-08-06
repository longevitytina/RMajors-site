import React from "react"
import testimonialStyles from "./testimonials.module.css"
import { Carousel } from "react-bootstrap"
import background from "../images/background.jpg"
import { DEFAULT_TESTIMONIALS } from "./testimonialData"

export default function testimonials() {
  return (
    <div style={{ backgroundColor: `rgb(63, 62, 62)` }}>
      <h1 className={testimonialStyles.heading} id="testimonials">
        Testimonials
      </h1>

      <Carousel className={testimonialStyles.container}>
        {DEFAULT_TESTIMONIALS.map(({ name, description }, index) => (
          <Carousel.Item>
            <div className={testimonialStyles.carouselItem}>
              <p style={{ padding: `60px` }}>
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
