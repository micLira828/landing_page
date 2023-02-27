import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import testimonials from './data';
import "./testimonials.css";
import "./styles.css";


// import required modules
import { Pagination } from "swiper";

import Testimonial from './Testimonial';

function Testimonials() {
  return (
    <section id = "testimonials">
      <h2>What my clients say</h2>
      <p>These are my testimonials from some of my clients</p>
      <div className="container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          testimonials.map(testimonial => <SwiperSlide key = {testimonial.id} >
            <Testimonial testimonial={testimonial}/>
          </SwiperSlide>)
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Testimonials