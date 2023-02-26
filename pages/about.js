import Head from 'next/head';
import Image from 'next/image';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import Workinfo from "../components/Workinfo"
import img from '../assets/srvcs.jpg'

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <div className='about'>
        <Row>
          <Col><p>We Provide Technical Services to Startups</p></Col>
          <Col>ast Refresh had to perform a full reload. Read more:
            https://nextjs.org/docs/basic-features/fast-refresh#how-it-works
            Error: Aborted because ./pages/about.js is not accepted
            Update propagation: ./pages/about.js /node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?
            absolutePagePath=D%3A%5Ccoding%5Creactjs%5Cpraukcy%5Cpages%5Cabout.js&page=%2Fabout!</Col>
        </Row>
        <Image src={img} alt='' />
        <hr />
        <Row>
          <Col><p>How we do things and what technolody we use</p></Col>
          <Col>ast Refresh had to perform a full reload. Read more:
            https://nextjs.org/docs/basic-features/fast-refresh#how-it-works
            Error: Aborted because ./pages/about.js is not accepted
            Update propagation: ./pages/about.js /node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?
            absolutePagePath=D%3A%5Ccoding%5Creactjs%5Cpraukcy%5Cpages%5Cabout.js&page=%2Fabout!</Col>
        </Row>
        <Row>
          <Col><p>How we do things and what technolody we use</p></Col>
          <Col>ast Refresh had to perform a full reload. Read more:
            https://nextjs.org/docs/basic-features/fast-refresh#how-it-works
            Error: Aborted because ./pages/about.js is not accepted
            Update propagation: ./pages/about.js /node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?
            absolutePagePath=D%3A%5Ccoding%5Creactjs%5Cpraukcy%5Cpages%5Cabout.js&page=%2Fabout!</Col>
        </Row>
        <Workinfo />
        <div className='team'>
          <h1>Meet Our Amazing Team</h1>
          <div className='team-box'>
            <div className='team-member'>Chetan Vyas</div>
            <div className='team-member'>Mithilesh Kukapalli</div>
            <div className='team-member'>Aashish Gupta</div>
            {/* <div className='team-member'>Tanmay Yadav</div> */}
          </div>
        </div>
        <Row>
          <Col>Join Our Team</Col>
          <Col></Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}

export default about