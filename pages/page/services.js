import Head from 'next/head';
import style from '../../styles/service.module.scss';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';
import Image from 'next/image';

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
      <Card1 title="Website Design and Development" cls={style.icls1} />
      <Card1 title="Android" cls={style.icls2} />
      <Card1 title="Logo Design and Graphics Design" cls={style.icls3} />
      <Card1 title="Video and Photo Editing" cls={style.icls4} />
      <Card1 title="Chatbots" cls={style.icls5} text='Welcome to PRAUKCY, a service-based startup that specializes in providing chatbot services to businesses of all sizes. Our innovative chatbot service is designed to help businesses automate their customer service, sales, and support processes, and improve overall customer engagement.

Our team of experts has developed an advanced chatbot platform that is built with state-of-the-art technology and artificial intelligence. This platform is capable of providing businesses with customized chatbots that can be integrated seamlessly into their existing systems, allowing them to automate their customer interactions across multiple channels, including websites, social media, messaging apps, and more.

Our chatbot service is designed to help businesses save time and resources by automating routine tasks such as answering frequently asked questions, providing customer support, and even processing sales transactions. This allows businesses to focus on more strategic tasks such as building relationships with their customers, improving their products and services, and growing their business.

With our chatbot service, businesses can also improve their customer engagement by providing their customers with personalized and responsive interactions, 24/7. Our chatbots are trained to understand and respond to customer queries in a natural and human-like manner, ensuring that customers always receive accurate and relevant information.'/>
      <Card1 title="3D Modelling" cls={style.icls6} />
      {/* <Card1 title="NEFT and Blockchain Services" cls={style.icls7} /> */}
      <Card1 title="GUI Design" cls={style.icls8} />
      <div className={style.servicefuture}>
        <Row>
          <Col sm={6}>
            <h1>Our Future Plans and Services</h1>
          </Col>
          <Col sm={6} >
            <span>
              We are trying more experiments will come up wit more services in future
            </span>
          </Col>
        </Row>
      </div>
    </div>
  )
}
const Card1 = (props) => {
  return (
    <div>
      <Image />
      <h2>{props.title}</h2>
      <Row className={style.serviceItem}>
        <Col sm={5} className={props.cls}>
        </Col>
        <Col sm={7} className={style.col}>
          {props.text}
        </Col>
      </Row>
    </div>
  )
}
export default Services