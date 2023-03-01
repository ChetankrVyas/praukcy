import Head from 'next/head';
import Image from 'next/image';
import style from '../../styles/service.module.scss';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import We from '../../assets/serve.png';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';

const Services = () => {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <Navbar />
      <div className={style.services2}>
        <div className={style.serve}></div>
        <Service />
      </div>
      <Footer />
    </>
  )
}
const Service = () => {
  return (
    <div id='servicesCm'>
      <h1>
        Services
      </h1>
      <Card1 title="Website Design and Development"cls={style.icls1}/>
      <Card2 title2="Android" cls2={style.icls2}/>
      <Card1 title="Search Engine Optimization" cls={style.icls3}/>
      <Card2 title2="Video and Photo Editing" cls2={style.icls4}/>
      <Card1 title="Chatbots" cls={style.icls5}/>  
      <Card2 title2="3D Modelling" cls2={style.icls6}/>
      <Card1 title="Graphics Designing" cls={style.icls7}/>  
      <Card2 title2="Web and Content Scraping" cls2={style.icls8}/>
    </div>
  )
}
const Card1 = (props) => {
  return (
    <div>
      <Row className={style.serviceItem}>
        <Col sm={5} className={`wevserig ${props.cls}`}>
        </Col>
        <Col sm={7} className='cm-3'>
          <h1>{props.title}</h1>
        </Col>
      </Row>
    </div>
  )
}
const Card2 = (props) => {
  return (
    <div>
      <Row className={style.serviceItem}>
        <Col sm={7} className='cm-3'>
          <h1>{props.title2}</h1>
        </Col>
        <Col sm={5} className={`wevserig2 ${props.cls2}`}>
        </Col>
      </Row>
    </div>
  )
}
export default Services