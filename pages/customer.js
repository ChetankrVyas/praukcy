import Head from 'next/head';
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

const customer = () => {
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

export default customer