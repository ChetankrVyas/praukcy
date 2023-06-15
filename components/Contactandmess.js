import React from 'react'
import Head from 'next/head';
import { useState } from 'react';
import Form1 from './AddForm';
import Tilt from "react-parallax-tilt";
import Support from '../assets/support.png';
import { Button, Col, Row } from 'react-bootstrap';
import Image from 'next/image';

const Contactandmess = () => {
  return (
    <>
    <Head>
      <title>Contact Us</title>
    </Head>
    <div className='contact'>
      <div className='c3'>
        <h1>How Can We Help?</h1>
        <span>{`You can either talk to us either through email or contact number or you can respond with the client side form and then we contact you in reply.`}</span>
        <Button href='/page/form' target='_blank' className='cbtn'>Credential</Button>
      </div>
      <Form1 />
      <div className='contactbottom'>
        <h1>Looking for reliable technical services?</h1>
        <div className='contactbottomtext'>
        {`Look no further than Praukcy! Our team of expert technicians is here to provide you with top-notch technical solutions that meet your needs. Contact us today to learn more about our services and how we can help you with your technical challenges. Whether you need IT support, software development, or other technical services, Praukcy has you covered. Reach out to us now to get started.`}
        </div>
      </div>
    </div>
  </>
  )
}

export default Contactandmess
