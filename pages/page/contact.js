import Head from 'next/head';
import { React, useState } from 'react'
import Form1 from '../../components/AddForm'
import { FaEnvelope } from 'react-icons/fa';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import Image from 'next/image';

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Navbar />
      <div className='contact'>
        <h4>Got a question?</h4>
        <h1>Contact Praukcy</h1>
        <h3>We are here to help and answer any qyestion you might have. We look Forward to hearing you</h3>
        <h2>How Can We Help?</h2>
        <div className='c3'></div>
        <div className='c1'>
          <h2>Contact Information</h2>
          <CiLocationOn></CiLocationOn><span>Sleeknote ApS Ankersgade 12C, 1, 8000 Aarhus</span>
          <IoCallOutline></IoCallOutline><span style={{ margin: 'auto 10px' }}><a style={{ color: 'black' }} href='tel: 8209181991'>+91-8209181991</a></span>
          <FaEnvelope></FaEnvelope><span style={{ margin: 'auto 5px' }}><a href='mailto: praukcy@gmail.com'>praukcy@gmail.com</a></span>
        </div>
        <Form1 />
      </div>
      <Footer />
    </>
  )
}

export default contact