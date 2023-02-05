import Head from 'next/head';
import Image from 'next/image';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Ayush from '../assets/ayush.jpg'
import Abhay from '../assets/abhay.jpg'
import Cha from '../assets/cha.jpg';
import { Card, Button } from 'react-bootstrap';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

const customer = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <div className='customer'>
        <Row className='customer-row1'>
          <Col><Image src={Cha} alt=''/></Col>
          <Col></Col>
        </Row>
        <h1>Our Customers</h1>
        <div className='customersdeck'>
          <Crd title='Abhay Shankar' img={Abhay} text='' />
          <Crd title='Ayush Sahu' text='' img={Ayush}/>
          <Crd title='Prakhar Yadav' text='' />
          <Crd title='Saatwik Shrivastava' text='' />
        </div>
        <div>
          <Row className='customer-row2'>
            <Col><Image src={Cha} alt=''/></Col>
            <Col></Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  )
}

const Crd = ({ title, text, img }) => {
  return (
    <div >
      <Card>
        <Card.Body>
          <Image src={img} alt='' />
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div >
  )
}

export default customer