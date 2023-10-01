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
              <h2>We are Digital Upgrade</h2>
              <p>Digital Upgrade, located in Evansville, IN, makes it easy for businesses to create and manage their digital presence and logistics, meaning we can make your business more efficient and profitable! We believe in our community and want to help our local business economy grow and expand. We believe in our clients, and want to assist in their digital success. The D-UP team grades ourselves on outcomes, not on sales.</p>
              <a href="#" title="About Us Button">ABOUT US</a>
            </div>
          </div>
        </div>
        <main className="main">
          <div className="cards-grid">
            <Card1 />
            <Card1 />
            <Card1 />
          </div>
        </main>
        <h1>Our Future Plans and Services</h1>
        <div className="inner">
          <div className="inner__headings">
            <h5 className="inner__sub">Our Capabilities</h5>
            <h2 className="inner__head">Having attractive
              services has never
              been <span className="inner__clr">easier.</span></h2>
          </div>
          <div className="inner__content">
            <p className="inner__text">We&apos;re brand strategy and digital design agency, building brands that
              matter in culture with more than ten years of knowledge e and in to do expertise and digital design agency or brands.</p>
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
        <h4 className="card__head">UI/UX Design</h4>
        <p className="card__content">Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</p>
      </div>
    </div>
  )
}
export default Services