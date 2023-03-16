import Head from 'next/head';
import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';
import Menu from '../../components/data';
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
  const allItem = () => {
    setItem(Menu)
  }
  return(
    <>
      <Head>
        <title>Portfolio</title>
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
      <div className='filter'>
        <button className='porbtn' onClick={() => allItem()}>All</button>
        <button className='porbtn' onClick={() => filterItem('webdevelopment')}>Websites</button>
        <button className='porbtn' onClick={() => filterItem('appdevelopment')}>Android Apps</button>
        <button className='porbtn' onClick={() => filterItem('softwaredevelopment')}>Softwares</button>
        <button className='porbtn' onClick={() => filterItem('seo')}>SEO Designs</button>
        <button className='porbtn' onClick={() => filterItem('chatbot')}>Chatbots</button>
        <button className='porbtn' onClick={() => filterItem('blockchain')}>Blockchain</button>
        <button className='porbtn' onClick={() => filterItem('Logo')}>Logo</button>
        <button className='porbtn' onClick={() => filterItem('videos-edited')}>Videos Edited</button>
      </div>
      <div className='portfolio-box'>
        {
          item.map((elem) => {
            const { id, name, category, linkImg, key } = elem;
            return (
              <div className='portfolio-item' key={key}>
                <h3>{name}</h3>
                <Image src={linkImg} alt={name} height={300} width={300} className='link-Img img-fluid' />
              </div>
            )
          })
        }
      </div>
      <div>
        <button onClick={() => filterItem('2023')}>2022</button>
      </div>
      <div>
      </div>
      <Footer />
    </>
  )
}

export default Portfolio