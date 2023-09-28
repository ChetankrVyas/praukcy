import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import praukcy from '../assets/portfolio/praukcy.png';
import blvess from '../assets/portfolio/blvess.png';
import textutils from '../assets/portfolio/textutils.png';
import Image from 'next/image';

const Portfolio = () => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
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
      <div className='one'>
        <h1 >PORTFOLIO</h1>
      </div>
      <Slider {...settings}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Slider>
    </div>
  )
}
const Card =()=>{
  return(
    <div className="img-card iCard-style2">
          <div className="card-content">
            <div className="card-image">
              <span className="card-caption">Image Caption</span>
              <img alt='' src="https://www.dropbox.com/s/63v40eqeq9lgz3k/bald-eagle-2715461_640.jpg?raw=1" />
            </div>

            <span className="card-title">Card Title</span>

            <div className="card-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Image by <a href="https://pixabay.com/users/moonzigg-6341937/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2715461" style={{textDecoration: 'none'}}>moonzigg</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2715461" style={{textDecoration: 'none'}}>Pixabay</a>
              </p>
            </div>

          </div>

          <div className="card-link">
            <a href="#" title="Read Full"><span>Read Full</span></a>
          </div>
        </div>
  )
}
export default Portfolio