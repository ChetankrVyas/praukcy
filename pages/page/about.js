import Head from 'next/head';
import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';
import styles from "../../styles/about.module.scss";
import Chetan from '../../assets/about/ch1.png'
import Aashish from '../../assets/ayush.jpg'
import Skill from '../../assets/about/skill.png'
import Mith from '../../assets/about/mith.png'
import Workinfo from "../../components/Workinfo"

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <div className='about-page'>
        <section className="about-section">
          <div className="container">
            <div className="row">
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="title">About Css3transition</span>
                    <h2>We are Creative Tech Enthusiast working since 2015</h2>
                  </div>
                  <div className="text">I am Rahul Yaduvanshi works at Css3 Transition since last 3 years. We are here to provide touch notch solution for your website or web application that helps you to make your website look attractive & efficient in handling by creating usefull plugins thats you need.</div>
                  <div className="text">
                    We are here to serve you next level tutorial that currently in trend to match you with your expertise. Css3 transition is a learning website. where you can find many good quality content related to web development and tutorials about plugins. here we are using html, html5, css, css3, jquery & javascript along with inspirational UI design layout by professionals by using Photoshop and adobe allustrator.
                  </div>
                  <div className="btn-box">
                    <a href="#" className="theme-btn btn-style-one">Contact Us</a>
                  </div>
                </div>
              </div>
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="author-desc">
                    <h2>Rahul Kumar Yadav</h2>
                    <span>Web Developer</span>
                  </div>
                  <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img title="Rahul Kumar Yadav" src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt="" /></a></figure>

                </div>
              </div>
            </div>
          </div>
        </section>
        <ul class="timeline">
          <li>
            <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>2009-2011</h4>
                <h4 class="subheading">Our Humble Beginnings</h4>
              </div>
              <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>March 2011</h4>
                <h4 class="subheading">An Agency is Born</h4>
              </div>
              <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
            </div>
          </li>
          <li>
            <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>December 2015</h4>
                <h4 class="subheading">Transition to Full Service</h4>
              </div>
              <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
            </div>
          </li>
        </ul>
        {/* <Row className={styles.abouthead}>
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
        </Row> */}
        <Workinfo />
        <div className="responsive-container-block container">
          <p className="text-blk team-head-text">
            Our Team
          </p>
          <Card />
          <Card />
          <Card />
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <img className="w-100 shadow" src="https://via.placeholder.com/824x552" />
            </div>
            <div className="col-lg-6">
              <div className="p-5 mt-4">
                <h1 className="display-4">H1 Heading</h1>
                <p className="lead">Crow&apos;s nest schooner ho scallywag hail-shot gabion salmagundi. Doubloon careen code of conduct lugsail hulk ye long clothes. </p>
                <button className='button'>Join Our Team</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

const Card = () => {
  return (
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="aboutcard">
        <div className="team-image-wrapper">
          <img className="team-member-image" src={Chetan} alt='' />
        </div>
        <p className="text-blk name">
          Davis George
        </p>
        <p className="text-blk position">
          CEO
        </p>
        <p className="text-blk feature-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="social-icons1">
          <a href="https://www.twitter.com" target="_blank" rel='noreferrer'>
            <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" alt='' />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel='noreferrer'>
            <img alt='' className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" />
          </a>
        </div>
      </div>
    </div>
  )
}
export default about