import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Tilt from "react-parallax-tilt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  var settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='portfolio'>
        <h1>Portfolio</h1>
        <Slider {...settings}>
          <div className='fort'>
            <h3 className='heading'>E-Cell Team Page</h3>
          </div>
          <div className='fort'>
            <h3>Newsapp</h3>
          </div>
          <div className='fort'>
            <h3>TextPlay</h3>
          </div>
          <div className='fort'>
            <h3>Praukcy</h3>
          </div>
          <div className='fort'>
            <h3>E-Summit 2023</h3>
          </div>
        </Slider>
    </div>
  )
}

export default Portfolio
