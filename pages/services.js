import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react'
import We from '../assets/web.jpg';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

const Services = () => {
  // const [item, setItem] = useState(Service);
  const HandleServices = ()=>{
    let element1 = document.getElementById('overviewCm');
    element1.style.display = 'none'
    let element2 = document.getElementById('servicesCm');
    element2.style.display = 'block'
  }
  const HandleOverview=()=>{
    let element = document.getElementById('servicesCm')
    element.style.display = 'none';
    let ele = document.getElementById('overviewCm');
    ele.style.display='block';
  }
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <Navbar />
      <div className='services2'>
        <Image src={We} />
        <div className='overser'>
          <button className='overser-btn' onClick={HandleServices}>Services</button>
          <button className='overser-btn' onClick={HandleOverview}>Overview</button>
        </div>
        <Service/>
        <Overview/>
      </div>
      <Footer />
    </>
  )
}
const Service = () => {
  return (
    <div id='servicesCm'>
      Services
      <div className='service-item'>
        <div className='service-item1'> </div>
      </div>
    </div>
  )
}
const Overview = () => {
  return (
    <div id='overviewCm'>
      Overview
    </div>
  )
}
export default Services