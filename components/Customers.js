import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Blv from '../assets/blvess.png';
import Image from 'next/image';
import Ayush from '../assets/ayush.jpg'
import Abhay from '../assets/abhay.jpg'
import { Card, Button } from 'react-bootstrap';

const Customers = () => {
  var settings = {
    centerMode: true,
    dots: true,
    centerPadding: '60px',
    className: 'center',
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
    <div className='clnts'>
      <div className='clients'><h1 style={{ textAlign: 'center' }}>Our Clients</h1></div>
      <div style={{ padding: '50px', }}>
        <Slider {...settings}>
          <Crd title='Abhay Shankar' img ={Abhay} text='' />
          <Crd title='Ayush Sahu' text='' />
          <Crd title='Prakhar Yadav' text='' />
          <Crd title='Saatwik Shrivastava' text='' />
        </Slider>
      </div>
    </div>
  )
}

const Crd = ({ title, text, img }) => {
  return (
    <div className='slides' >
      <Card className='mycards'>
        <Card.Body>
          <Image src={img} className='ima' alt=''/>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div >
  )
}
export default Customers