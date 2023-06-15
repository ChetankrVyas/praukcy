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
    <div className='contact'>
      <Form1 />
      <div className='c3'>
        <h1>How Can We Help?</h1>
        <span>{`You can either talk to us either through email or contact number or you can respond with the client side form and then we contact you in reply.`}</span>
        <Button href='/page/form' target='_blank' className='cbtn'>Credential</Button>
      </div>
    </div>
  )
}

export default Contactandmess
