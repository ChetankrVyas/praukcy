import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide:true,
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
        settings:{
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
      <h1 style={{ textAlign: 'center' }} >Portfolio</h1>
      <Slider {...settings}>
        <div className='fort'>
          <h3 className='heading'>E-Cell Team Page</h3>
          <a href='' style={{ left: '0' }} className="butn">GitHub</a>
          <a href='' style={{ right: '0' }} className="butn">Page</a>
        </div>
        <div className='fort'>
          <h3>Newsapp</h3>
          <a href='' style={{ left: '0' }} className="butn">GitHub</a>
          <a href='' style={{ right: '0' }} className="butn">Page</a>
        </div>
        <div className='fort'>
          <h3>TextPlay</h3>
          <a href='' style={{ left: '0' }} className="butn">GitHub</a>
          <a href='' style={{ right: '0' }} className="butn">Page</a>
        </div>
        <div className='fort'>
          <h3>Praukcy</h3>
          <a href='' style={{ left: '0' }} className="butn">GitHub</a>
          <a href='' style={{ right: '0' }} className="butn">Page</a>
        </div>
        <div className='fort'>
          <h3>BLVESS</h3>
          <a href='' style={{ left: '0' }} className="butn">GitHub</a>
          <a href='' style={{ right: '0' }} className="butn">Page</a>
        </div>
      </Slider>
    </div>
  )
}

export default Portfolio
