import Head from 'next/head';
import { React, useState } from 'react';
import Form1 from '../../components/AddForm';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Tilt from "react-parallax-tilt";
import Support from '../../assets/support.png';
import { Button, Col, Row } from 'react-bootstrap';
import Image from 'next/image';

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Navbar />
      <div className='contact'>
        <Row className='contacthead'>
          <Col >
          <Tilt><Image className='contactimg' src={Support} height={450} width={550} /></Tilt>
          </Col>
          <Col className='contactheadcol'>
            <h1>Got a question?</h1>
            <span>We are here to help and answer any qyestion you might have. We look Forward to hearing you</span>
          </Col>
        </Row>
        <div className='c3'>
          <h1>How Can We Help?</h1>
          <span>You can either talk to us either through email or contact number or you can respond with the client side form and then we contact you in reply.</span>
          <Button href='/page/form' target='_blank' className='cbtn'>Credential</Button>
        </div>
        <Form1 />
        <div className='contactbottom'>
          You can ask all you want
        </div>
      </div>
      <Footer />
    </>
  )
}

export default contact