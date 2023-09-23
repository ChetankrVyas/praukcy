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
        <div className='a2'>
          <h3>Newsapp</h3>
          <div className='a3'>
            <Image className='im2' src={praukcy} alt='' />
            <div className='overlay'><Link href='' className='pagelink'>Page Link</Link></div>
          </div>
        </div>
        <div className='a2'>
          <h3>TextPlay</h3>
          <div className='a3'>
            <Image src={textutils} className='im2' alt='' />
            <div className='overlay'><Link href='https://mywebsite-eight-alpha.vercel.app/' className='pagelink'>Page Link</Link></div>
          </div>
        </div>
        <div className='a2'>
          <h3>Praukcy</h3>
          <div className='a3'>
            <Image src={praukcy} className='im2' alt='' />
            <div className='overlay'><Link href='https://praukcy.vercel.app/' className='pagelink'>Page Link</Link></div>
          </div>
        </div>
        <div className='a2'>
          <h3>BLVESS</h3>
          <div className='a3'>
            <Image src={blvess} className='im2' alt='' />
            <div className='overlay'><Link href='https://blvess.org/' className='pagelink'>Page Link</Link></div>
          </div>
        </div>
        <div className='a2'>
          <h3>I-Notebook</h3>
          <div className='a3'>
            <Image className='im2' src={praukcy} alt='' />
            <div className='overlay'><Link href='' className='pagelink'>Page Link</Link></div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Portfolio