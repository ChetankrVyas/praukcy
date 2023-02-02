import Head from 'next/head';
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <Footer />
    </>
  )
}

export default about