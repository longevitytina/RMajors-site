import React from "react"
import TestimonialPreview from "./testimonialPreview"
import { DEFAULT_TESTIMONIALS } from "./testimonialData"
import testimonialStyles from "./testimonials.module.css"

export default function testimonials() {
  return (
    <div style={{ backgroundColor: `rgb(63, 62, 62)`, marginTop: `10%` }}>
      <h1 className={testimonialStyles.heading} id="testimonials">
        Testimonials
      </h1>
      <div className={testimonialStyles.container}>
        {DEFAULT_TESTIMONIALS.map((project, i) => (
          <TestimonialPreview {...project} key={i} />
        ))}
      </div>
    </div>
  )
}
