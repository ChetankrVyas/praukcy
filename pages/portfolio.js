import Head from 'next/head';
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import Menu from '../components/data'
import { useState } from 'react';
import Image from 'next/image';

const Portfolio = () => {
  const [item, setItem] = useState(Menu);
  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category == categItem;
    })
    setItem(updateItems)
  }
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <div className='portfolio2'>
        <div className='portfolio2-1'>
          <h1>Praukcy</h1>
        </div>
      </div>
      <div>
        < h1>Technologies What We Use</h1>
        <h3>HTML</h3>
        <h3>Javascript</h3>
        <h3>React js</h3>
        <h3>Next Js</h3>
        <h3>Wxpress Js</h3>
        <h3>Firebase</h3>
      </div>
      
      <div>
        <button onClick={() => filterItem('webdevelopment')}>Websites</button>
        <button onClick={() => filterItem('appdevelopment')}>Android Apps</button>
        <button onClick={() => filterItem('softwaredevelopment')}>Softwares</button>
        <button onClick={() => filterItem('seo')}>SEO Designs</button>
        <button onClick={() => filterItem('chatbot')}>Chatbots</button>
        <button onClick={() => filterItem('blockchain')}>Blockchain</button>
      </div>
      <div className='portfolio-box' id='#portfolio'>
        {
          item.map((elem) => {
            const { id, name, category, linkImg,key } = elem;
            return (
              <div className='portfolio-item' key={key}>
                <h3>{name}</h3>
                <Image src={linkImg} alt={name} className='linkImg img-fluid' />
              </div>
            )
          })
        }
      </div>
      <div>
        <h3>Number Of projects done in a field</h3>
        App development
        Web development
        Blockchain
        Chatbots
        Seo Designs
        Software Development
      </div>
      <Footer />
    </>
  )
}

export default Portfolio