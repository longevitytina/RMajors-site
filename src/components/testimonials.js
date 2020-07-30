import React from "react"
import TestimonialPreview from "./testimonialPreview"
import { DEFAULT_TESTIMONIALS } from "./testimonialData"
import testimonialStyles from "./testimonials.module.css"
import { Carousel } from "react-bootstrap"
import pic1 from "../images/humanitarian.jpeg"
import background from "../images/background.jpg"

export default function testimonials() {
  return (
    <div style={{ backgroundColor: `rgb(63, 62, 62)`, marginTop: `10%` }}>
      <h1 className={testimonialStyles.heading} id="testimonials">
        Testimonials
      </h1>

      <Carousel>
        <Carousel.Item>
          <div className={testimonialStyles.slideBackground}>
            <img className="d-block w-100" src={background} />
            <h2>title #1</h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={testimonialStyles.slideBackground}>
            <img className="d-block w-100" src={background} />
            <h2>title #2</h2>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* <div className={testimonialStyles.container}>
        {DEFAULT_TESTIMONIALS.map((project, i) => (
          <TestimonialPreview {...project} key={i} />
        ))}
      </div> */}
    </div>
  )
}
