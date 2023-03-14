import Head from 'next/head';
import Image from 'next/image';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';
import Chetan from '../../assets/ch1.png'
import Aashish from '../../assets/ak1.png'
import Workinfo from "../../components/Workinfo"
import img from '../../assets/srvcs.jpg'

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <div className='about'>
        <Row className='abouthead'>
          <Col sm={5} className='abouthead1'><h1>Praukcy provides technical services to startups and existing businesses</h1></Col>
          <Col sm={7}>
            <span className='paragraph'>
              ast Refresh had to perform a fu ll reload. Read more:
              https:// nextjs.or g/docs/basic- featur es/fast-refre sh#ho w-it -works
              Error: Aborted be cause ./ pages/about.js is no  accepted
              Update  pr opagation: ./pages/about.js /node_modules/n ext/ dist/bu ild/ webpac /loader s/nex  t-clien -pages -loa  der.js?
              absolu tePage Path=D% 3 A%5C coding 5Cre actjs%  p raukcy% 5Cp ges%5 a bo t.js& page=% 2Fabout!
            </span>
          </Col>
        </Row>
        <div className='content'>

        </div>
        <hr />
        <Row className='abouthead'>
          <Col sm={5} className='abouthead1'><h1>How we do things and what technolody we use</h1></Col>
          <Col sm={7}>
            <span className='paragraph'>
              ast Refresh had to perform a fu ll reload. Read more:
              https:// nextjs.or g/docs/basic- featur es/fast-refre sh#ho w-it -works
              Error: Aborted be cause ./ pages/about.js is no  accepted
              Update  pr opagation: ./pages/about.js /node_modules/n ext/ dist/bu ild/ webpac /loader s/nex  t-clien -pages -loa  der.js?
              absolu tePage Path=D% 3 A%5C coding 5Cre actjs%  p raukcy% 5Cp ges%5 a bo t.js& page=% 2Fabout!
            </span>
          </Col>
        </Row>
        <Row className='abouthead'>
          <Col sm={5} className='abouthead1'><h1>How we do things and what technolody we use</h1></Col>
          <Col sm={7}>
            <span className='paragraph'>
              ast Refresh had to perform a fu ll reload. Read more:
              https:// nextjs.or g/docs/basic- featur es/fast-refre sh#ho w-it -works
              Error: Aborted be cause ./ pages/about.js is no  accepted
              Update  pr opagation: ./pages/about.js /node_modules/n ext/ dist/bu ild/ webpac /loader s/nex  t-clien -pages -loa  der.js?
              absolu tePage Path=D% 3 A%5C coding 5Cre actjs%  p raukcy% 5Cp ges%5 a bo t.js& page=% 2Fabout!
            </span>
          </Col>
        </Row>
        <Workinfo />
        <div className='team'>
          <h1>Meet Our Amazing Team</h1>
          <div className='team-box'>
            <div className='team-member'>
              <name>Chetan Vyas</name>
              <Image src={Chetan} alt='' className='team-image' />
            </div>
            <div className='team-member'>
              <name>Mithilesh Kukapalli</name>
              <Image src={Chetan} alt='' className='team-image' />
            </div>
            <div className='team-member'>
              <name>Aashish Gupta</name>
              <Image src={Aashish} alt='' className='team-image' />

            </div>
          </div>
        </div>
        <Row className='joinrow'>
          <Col className='joincol'>

          </Col>
          <Col className='joincol'>
            <h2
            >We are looking for technical skilled people to join us.
              If you are interested and have skills then kindly fill the form to join
            </h2>
            <button >Join Our Team</button>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}

export default about