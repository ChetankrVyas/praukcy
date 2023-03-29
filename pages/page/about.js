import Head from 'next/head';
import Image from 'next/image';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';
import styles from "../../styles/about.module.scss";
import Chetan from '../../assets/about/ch1.png'
import Aashish from '../../assets/about/ak1.png'
import Skill from '../../assets/about/skill.png'
import Mith from '../../assets/about/mith.png'
import Workinfo from "../../components/Workinfo"
import img from '../../assets/srvcs.jpg'

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <div className={styles.about}>
        <Row className={styles.content}>
          <Col sm={6}>
            <div className={styles.head}><span className={styles.underline}>{`About Us`}</span></div>
            <div className={styles.headtext}><span>{`Praukcy is a professional services company that specializes in providing technical services to startups and existing businesses. The company has a team of experienced professionals who are dedicated to providing high-quality technical services to help businesses and startups achieve their goals. The Team at Praukcy is made up of skilled professionals with expertise in a range of technical areas,

`}</span></div>
          </Col>
          <Col sm={6}></Col>
        </Row>
        <Row className={styles.abouthead}>
          <Col sm={6} className={styles.abouthead1}>{`What kind of services does Praukcy offer ?`}</Col>
          <Col sm={6} className={styles.abouthead2}>
            <div className={styles.paragraph}>
              {`Praukcy provides technical services to startups and existing businesses. Praukcy is a company that specializes in providing technical services to businesses and startups. They offer a range of technical services to help businesses and startups develop and maintain their technical operations. `}
            </div>
          </Col>
        </Row>

        <Row className={styles.abouthead}>
          <Col sm={6} className={styles.abouthead1}>{`How do we assist startups and businesses`}</Col>
          <Col sm={6} className={styles.abouthead2}>
            <div className={styles.paragraph}>
              {` For startups, Praukcy provides technical services that can help them launch and grow their businesses. Their services include software development, website development, mobile app development, data analytics, cloud computing, cybersecurity, and more.
              Praukcy's technical services are designed to be flexible and customizable.`}
            </div>
          </Col>
        </Row>
        <Row className={styles.abouthead}>
          <Col sm={6} className={styles.abouthead1}>{`What technologies and software we use?`}</Col>
          <Col sm={6} className={styles.abouthead2}>
            <div className={styles.paragraph}>
              {`At Praukcy, we leverage a range of advanced technologies including React.js, Express, Node.js, Nexe, Flutter, Tkinter, MongoDB, Firebase, AutoDesk Maya, modern AI APIs, Figma, Canva, video editors, and more. By utilizing the latest available resources, we are able to provide our customers with the best possible assistance and support.`}
            </div>
          </Col>
        </Row>
        <Workinfo />
        <div className={styles.team}>
          <h1>Meet Our Amazing Team</h1>
          <div className={styles.teambox}>
            <div className={styles.teammember}>
              <name>Chetan Vyas</name>
              <Image src={Chetan} alt='' className={styles.teamimage} />
            </div>
            <div className={styles.teammember}>
              <name>Mithilesh Kukapalli</name>
              <Image src={Mith} alt='' className={styles.teamimage} />
            </div>
            <div className={styles.teammember}>
              <name>Aashish Gupta</name>
              <Image src={Aashish} alt='' className={styles.teamimage} />

            </div>
          </div>
        </div>
        <Row className={styles.joinrow}>
          <Col sm={6} className={styles.joincol}>
            <Image src={Skill} className={styles.skillimage}/>
          </Col>
          <Col sm={6} className={styles.joincol}>
            <h2>We are looking for technical skilled people to join us.
              If you are interested and have skills then kindly fill the form to join.
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