import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
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
          <Crd />
          <Crd />
          <Crd />
          <Crd />
          <Crd />
        </Slider>
      </div>
    </div>
  )
}

const Crd = () => {
  return (
    <div div className='slides' >
      <Card className='mycards'>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div >
  )
}
export default Customers