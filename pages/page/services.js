import Head from 'next/head';
import style from '../../styles/service.module.scss';
import React, { useState } from 'react'
import web from '../../assets/services/web.jpg'
import android from '../../assets/services/android2.jpg'
import chat from '../../assets/services/chat.png'
import edit from '../../assets/services/edit.jpg'
import logo from '../../assets/services/logo.png'
import gui from '../../assets/services/gui.jpg'
import d3d from '../../assets/services/3d.jpg'
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
        <div className={style.serve}>
          the
        </div>
        <Service />
      </div>
      <Footer />
    </>
  )
}
const Service = () => {
  return (
    <div id='servicesCm'>
      <Card1 title="Website Design and Development" imag={web} text1='Praukcy crafts engaging websites that drive business growth and success.' text2='Praukcy is the go-to destination for businesses looking to create stunning websites that are tailored to their brand and offer an exceptional user experience.'/>
      <Card1 title="Android" imag={android} text1='Praukcy creates cutting-edge apps that meet their unique needs.' text2='We specializes in creating custom Android apps that are tailored to your unique business needs. From design to development and everything in between, Praukcy has the tools and knowledge to help your Android app succeed in todays competitive market.'/>
      <Card1 title="Logo and Graphics Design" imag={logo} text1='Praukcy is the one-stop solution for all your logo and graphic design needs.' text2='Our team of skilled designers is dedicated to crafting unique and visually stunning designs that perfectly capture your brands essence. With Praukcy, you can be confident that your brand will stand out and make a lasting impression on your audience.'/>
      <Card1 title="Video and Photo Editing" imag={edit} text1='Praukcy offers expert video and photo editing services.'
      text2='With our splendid services, you can be assured of high-quality and professional editing that will take your content to the next level. Whether you are looking to enhance your social media presence, create captivating marketing materials, or simply preserve cherished memories, Praukcy has got you covered.'/>
      <Card1 title="Chatbots" text1='Chatbots allows businesses to grow due to less time spend with consumers directly '
      text2='Providing businesses with customized chatbots that can be integrated seamlessly into their existing systems, allowing them to automate their customer interactions across multiple channels, including websites, social media, messaging apps, and more.' imag={chat}/>
      <Card1 title="3D Modelling" imag={d3d} text1='Quality 3D models are build by aur team'
      text2='Our team of experienced designers and modelers are dedicated to delivering top-notch solutions that meet the needs of our clients. Whether you need a 3D model for product visualization, architectural rendering, or game development, our team has the skills and expertise to get the job done right.'/>
      {/* <Card1 title="NEFT and Blockchain Services" imag={web} /> */}
      <Card1 title="GUI Design" imag={gui} text1= 'Top-notch services for GUI development is provided.'
      text2='We understand that creating a great graphical user interface is crucial to the success of any software application. Thats why we specialize in offering GUI development services that meet the highest industry standards.'/>
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
      <Col className={style.serviceItem}>
        <Col sm={6} className={style.col1}>
          <Image src={props.imag}  className={style.imag}/>
        </Col>
        <Col sm={6} className={style.col}>
          <span className={style.text1}>{props.text1}</span>
          <br/>
          <div className={style.text2}>{props.text2}</div>
        </Col>
      </Col>
    </div>
  )
}
export default Services