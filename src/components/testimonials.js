import React from "react"
import testimonialStyles from "./testimonials.module.css"
import { Carousel } from "react-bootstrap"
import background from "../images/background.jpg"

export default function testimonials() {
  return (
    <div style={{ backgroundColor: `rgb(63, 62, 62)`, marginTop: `10%` }}>
      <h1 className={testimonialStyles.heading} id="testimonials">
        Testimonials
      </h1>

      <Carousel>
        <Carousel.Item>
          <div>
            <img
              style={{
                opacity: `50%`,
                position: `relative`,
              }}
              className="d-block w-50"
              src={background}
            />
            <div className={testimonialStyles.content}>
              <h2>Bill</h2>
              <p>
                Utapau chewbacca mara skywalker sidious tatooine darth. Wampa
                padmé padmé sidious. Darth calamari kessel skywalker droid
                alderaan. "
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={testimonialStyles.slideBackground}>
            <img
              style={{ opacity: `50%` }}
              className="d-block w-50"
              src={background}
            />
            <div className={testimonialStyles.content}>
              <h2>Martha</h2>
              <p>
                Utapau chewbacca mara skywalker sidious tatooine darth. Wampa
                padmé padmé sidious. Darth calamari kessel skywalker droid
                alderaan. "
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
