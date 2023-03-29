import Head from 'next/head';
import React from 'react'
import style from '../../styles/portfolio.module.scss';
import Footer from '../../components/Footer';
import Dropdown from 'react-bootstrap/Dropdown';
import port from '../../assets/portfolio/portfolio.jpg'
import Navbar from '../../components/Navbar';
import Menu from '../../components/data';
import { VscSettings } from "react-icons/vsc";
import { useState } from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';

const Portfolio = () => {
  const [filter, setFilter] = useState('All')
  const [item, setItem] = useState(Menu);
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
      <Row className={style.row1}>
        <Col sm={6} className={style.col2}>
          <div className={style.texthead}>
            <h1>Praukcy- Work Portfolio</h1>
            <text>{`Praukcy offers a wide range of services that include software development, website design, mobile app development, IT support, and cybersecurity. Praukcy's team of experienced professionals works closely with clients to understand their unique needs and provide tailored solutions that optimize their operations, increase efficiency, and drive growth. With a commitment to quality and customer satisfaction, Praukcy is a trusted partner for businesses of all sizes and industries.`}</text>
          </div>
        </Col>
        <Col sm={6} className={style.col1}>
          <Image alt='' src={port} className={style.portimg} />
        </Col>
      </Row>
      <h2 className={style.filterhead}>Filter Portfolio on the basis of type of work</h2>
      <Dropdown className={style.filter}>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className={style.tbtn}>
          {filter} <VscSettings className={style.filterset}></VscSettings>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item default className={style.porbtn} onClick={() => allItem()}>All</Dropdown.Item>
          <Dropdown.Item className={style.porbtn} onClick={function (event) { filterItem('webdevelopment'); setFilter('Websites'); }}>Websites</Dropdown.Item>
          <Dropdown.Item className={style.porbtn} onClick={function (event) { filterItem('appdevelopment'); setFilter('Android Apps'); }}>Android Apps</Dropdown.Item>
          <Dropdown.Item className={style.porbtn} onClick={function (event) { filterItem('softwaredevelopment'); setFilter('Softwares'); }}>Softwares</Dropdown.Item>
          <Dropdown.Item className={style.porbtn} onClick={function (event) { filterItem('3D'); setFilter('3D Models'); }}>3D Models</Dropdown.Item>
          <Dropdown.Item className={style.porbtn} onClick={function (event) { filterItem('chatbot'); setFilter('Chatbots'); }}>Chatbots</Dropdown.Item>
          <Dropdown.Item className={style.porbtn} onClick={function (event) { filterItem('gui'); setFilter('GUI'); }}>GUI</Dropdown.Item>
          <Dropdown.Item className={style.porbtn} onClick={function (event) { filterItem('graphicdesign'); setFilter('Graphic Designs'); }}>Graphic Designs</Dropdown.Item>
          <Dropdown.Item className={style.porbtn} onClick={() => filterItem('logo')}>Logo</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className={style.workmenu}>
        <div className={style.workcard}>
          {
            item.map((elem) => {
              const { id, name, category, linkImg, key } = elem;
              return (
                <div className={style.portfolio_item} key={key}>
                  <Image src={linkImg} alt={name}  className='link-Img img-fluid' />
                  <h3>{name}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* <div>
        <button onClick={() => filterItem('2022')}>2022</button>
        <button onClick={() => filterItem('2023')}>2023</button>
      </div> */}
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