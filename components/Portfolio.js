import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import We from '../assets/web.jpg';
import Image from 'next/image';

const Portfolio = () => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
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
      <h1 style={{ textAlign: 'center' }} >Portfolio</h1>
      <Slider {...settings}>
        <div className='a2'>
          <h3 style={{ height: '20%' }}>E-Cell Team Page</h3>
          <div className='a3'>
            <div className='im2'></div>
            <div className='overlay'><Link href='' className='pagelink'>Page Link</Link></div>
          </div>
        </div>
        <div className='a2'>
          <h3 style={{ height: '20%' }}>Newsapp</h3>
          <div className='a3'>
            <div className='im2'></div>
            <div className='overlay'><Link href='' className='pagelink'>Page Link</Link></div>
          </div>
        </div>
        <div className='a2'>
          <h3 style={{ height: '20%' }}>TextPlay</h3>
          <div className='a3'>
            <div className='im2'></div>
            <div className='overlay'><Link href='' className='pagelink'>Page Link</Link></div>
          </div>
        </div>
        <div className='a2'>
          <h3 style={{ height: '20%' }}>Praukcy</h3>
          <div className='a3'>
            <div className='im2'></div>
            <div className='overlay'><Link href='' className='pagelink'>Page Link</Link></div>
          </div>
        </div>
        <div className='a2'>
          <h3 style={{ height: '20%' }}>BLVESS</h3>
          <div className='a3'>
            <div className='im2'></div>
            <div className='overlay'><Link href='' className='pagelink'>Page Link</Link></div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Portfolio
