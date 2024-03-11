import Head from 'next/head';
import style from '../../styles/service.module.scss';
import React, { useState } from 'react'
import service from '../../assets/services/service3.png'
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
        {/* <Row className={style.serve}>
          <Col sm={6} className={style.col4}>
            <h1>Praukcy</h1>
            <div className={style.text3}>Praukcy is a versatile and dynamic company that offers a wide range of technical services to help individuals and businesses establish and enhance their online presence. With a strong focus on delivering high-quality results, Praukcy provides expert services in areas such as web development, app development, logo design, and graphic design.</div>
          </Col>
          <Col sm={6} className={style.col5}>
            <Image src={service} className={style.imag} alt='' />
          </Col>
        </Row> */}
        <div className="we-are-block">
          <div id="about-us-section">
            <div className="about-us-image">
              <img src="https://digitalupgrade.com/images/lobbyimage_1.jpg" alt="Lobby Image" />
            </div>
            <div className="about-us-info">
              <h2>Need Digital Upgrade?</h2>
              <p>Praukcy simplifies the process for businesses to establish and oversee their digital footprint and operations, fostering enhanced efficiency and profitability. Our dedication to community empowerment drives us to catalyze local economic expansion. Committed to client-centricity, we prioritize facilitating their digital triumphs.</p>
              <a href="#" title="About Us Button">ABOUT US</a>
            </div>
            <div className="about-us-image2">
              <img src="https://digitalupgrade.com/images/lobbyimage_1.jpg" alt="Lobby Image" />
            </div>
          </div>
        </div>
        <main className="main">
          <div className="cards-grid">
            <Card1 title = "Graphics Design"/>
            <Card1 title="Hosting and Deployment"/>
            <Card1 title="Server and Database Integration"/>
            <Card1 title = "Chatbot Integration"/>
            <Card1 title = "Monitoring and Optimization"/>
          </div>
        </main>
        <div className="inner">
          <div className="inner__headings">
            <h5 className="inner__sub">Our Capabilities</h5>
            <h2 className="inner__head">Having attractive
              services has never
              been <span className="inner__clr">easier.</span></h2>
          </div>
          <div className="inner__content">
            <p className="inner__text">We&apos;re brand strategy and digital design agency, building brands that
              matter in culture with variety of knowledge and in to do expertise and digital design agency or brands.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

const Card1 = (props) => {
  return (

    <div className="card">
      <img className="card__icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2709552/icon-brand.svg" alt="brand" />
      <div className="card__body">
        <h4 className="card__head">{props.title}</h4>
        <p className="card__content">Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App We deliver end-to-end website management and design solutions, encompassing meticulous UI design, seamless server and database integration, and a full spectrum of professional services.</p>
      </div>
    </div>
  )
}

export default Services