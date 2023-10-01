import Head from 'next/head';
import React from 'react'
import style from '../../styles/portfolio.module.scss';
import Footer from '../../components/Footer';
import port from '../../assets/portfolio/portfolio.jpg'
import Navbar from '../../components/Navbar';
import Menu from '../../components/data';
import { useState } from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';

const Portfolio = () => {
  const [item, setItem] = useState(Menu);
  const [active, setActive] = useState('all');
  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category == categItem;
    })
    setItem(updateItems);
  }
  const allItem = () => {
    setItem(Menu)
  }
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Navbar />
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you eat
              healthy again. Tailored to your personal tastes and nutritional
              needs.
            </p>
          </div>
          <div className="hero-img-box">
            <img
              src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/hero.png"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              className="hero-img"
            />
          </div>
        </div>
      </section>
      <h2 className={style.filterhead}>Filter Portfolio on the basis of type of work</h2>
      <div className='buttons'>
        <button default className={`button ${active == 'all' && 'activ'}`} onClick={function (event) { allItem(); setActive('all'); }}>All</button>
        <button className={`button ${active == 'webdevelopment' && 'activ'}`} onClick={function (event) { filterItem('webdevelopment'); setActive('webdevelopment'); }}>Websites</button>
        <button className={`button ${active == 'appdevelopment' && 'activ'}`} onClick={function (event) { filterItem('appdevelopment'); setActive('appdevelopment'); }}>Android Apps</button>
        <button className={`button ${active == 'chatbot' && 'activ'}`} onClick={function (event) { filterItem('chatbot'); setActive('chatbot'); }}>Chatbots</button>
        <button className={`button ${active == 'graphicdesign' && 'activ'}`} onClick={function (event) { filterItem('graphicdesign'); setActive('graphicdesign'); }}>Graphic Designs</button>
        <button className={`button ${active == 'logo' && 'activ'}`} onClick={function (event) { filterItem('logo'); setActive('logo'); }}>Logo</button>
      </div>
      <div className={style.workmenu}>
        <div className={style.workcard}>
          {
            item.map((elem) => {
              const { id, name, category, linkImg, key } = elem;
              return (
                <div className="img-card iCard-style3" key={key}>
                  <div className="card-content">
                    <div className="card-image">
                      <img alt='' src="https://www.dropbox.com/s/tclqbz7o4u8e705/ipad-632394_640.jpg?raw=1" />
                    </div>
                    <span className="card-title">{name}</span>
                    <div className="card-text">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Image by <a href="https://pixabay.com/users/FirmBee-663163/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=632394" style={{ textDecoration: "none" }}>William  Iven</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=632394" style={{ textDecoration: "none" }}>Pixabay</a>
                      </p>
                    </div>
                  </div>
                  <div className="card-link">
                    <a href="#" title="Read Full">
                      <span>Go To Link</span>
                    </a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Row className={style.row2}>
        <div className={style.col3}>
          <h1>Our Motive</h1>
          <h2>{`"Praukcy: Your Trusted Partner for Technical Assistance and Support Services - Empowering Your Business with Reliable Solutions"`}</h2>
        </div>
        <div className={style.col4}>
        </div>
      </Row>
      <Footer />
    </>
  )
}

export default Portfolio