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
    // autoplay:true,
    autoplaySpeed:2000,
    slidesToShow: 5,
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
        <div className='a2' style={{width:'250px'}}>
          <h3>E-Cell Team Page</h3>
          <div className='a3'>
            <div className='im2'></div>
            <div className='overlay'><Link href='' className='pagelink'>Page Link</Link></div>
          </div>
        </div>
        <div className='a2'>
          <h3>Newsapp</h3>
          <div className='a3'>
            <div className='im2'></div>
            <div className='overlay'><Link href='' className='pagelink'>Page Link</Link></div>
          </div>
        </div>
        <div className='a2'>
          <h3>TextPlay</h3>
          <div className='a3'>
            <div className='im2'></div>
            <div className='overlay'><Link href='' className='pagelink'>Page Link</Link></div>
          </div>
        </div>
        <div className='a2'>
          <h3>Praukcy</h3>
          <div className='a3'>
            <div className='im2'></div>
            <div className='overlay'><Link href='' className='pagelink'>Page Link</Link></div>
          </div>
        </div>
        <div className='a2'>
          <h3>BLVESS</h3>
          <div className='a3'>
            <div className='im2'></div>
            <div className='overlay'><Link href='' className='pagelink'>Page Link</Link></div>
          </div>
        </div>
        <div className='a2'>
          <h3>I-Notebook</h3>
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
