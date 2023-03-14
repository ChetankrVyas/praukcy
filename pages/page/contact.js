import Head from 'next/head';
import { React, useState } from 'react'
import Form1 from '../../components/AddForm'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';
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
          <Col>

          </Col>
          <Col className='contactheadcol'>
            <h4>Got a question?</h4>
            <span>We are here to help and answer any qyestion you might have. We look Forward to hearing you</span>
          </Col>
        </Row>
        <div className='c3'>
        <h2>How Can We Help?</h2>
          Tou can either talk to us either through email or contact number or you can respond with the client side form and then we contact you in reply.
          <Button href='/page/form' target='_blank' className='cbtn'>Credential</Button>
        </div>
        <Form1 />
      </div>
      <Footer />
    </>
  )
}

export default contact