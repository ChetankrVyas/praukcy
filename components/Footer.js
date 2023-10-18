import React, { useContext, useState } from 'react'
import { Row, Col, Button, Modal } from "react-bootstrap";
import Image from "next/image";
import AddForm from './Message';
import logo from '../assets/logo.png'
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
const Footer = (props) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <footer className="text-center text-lg-start myfooter">
        <div className="container p-4 pb-0">
          <section className="">
            <Row>
              < Col >
                <Link href='/'><Image src={logo} height={100} alt=''/></Link>
              </Col>
              <hr className="w-100 clearfix d-md-none" />
              <Col>
                <Row>
                  <h6 className="text-uppercase mb-4 font-weight-bold ">
                    <span className="underline">Important Links</span>
                  </h6>
                  <Col>
                    <p>
                      <Link href="/" className="ulstyle">Home</Link>
                    </p>
                    <p>
                      <Link href="/page/services" className="ulstyle">Services</Link>
                    </p>
                    <p>
                      <Popup show={modalShow} onHide={() => setModalShow(false)} title={props.title} text1={props.text1} />
                      <button onClick={() => setModalShow(true)} className="ulstyle">Message</button>
                    </p>
                    <p>
                      <Link href="/page/customer" className="ulstyle">Customers</Link>
                    </p>
                  </Col>
                  <hr className="w-100 clearfix d-md-none" />
                  <Col>
                    <p>
                      <Link href="/page/portfolio" className="ulstyle">Portfolio</Link>
                    </p>
                    <p>
                      <Link href="/page/team" className="ulstyle">Team</Link>
                    </p>
                    <p>
                      <Link href="/page/about" className="ulstyle">About</Link>
                    </p>
                    <p>
                      <Link href="/page/customer" className="ulstyle">Help</Link>
                    </p>
                  </Col>
                </Row>
              </Col>
              <hr className="w-100 clearfix d-md-none" />
              <Col className="footer-items">
                <h6 className="text-uppercase mb-4 font-weight-bold"><span className="underline">Contact Us</span></h6>
                <address style={{ lineHeight: '2.2' }}>
                  Contact at: <a href="tel:8209181991">+91-8209181991<br /></a>
                  Mail On: <a href="mailto:info@praukcy.com">praukcy@gmail.com</a><br />
                  Head Office: Room No.- 257,<br />Morvi Hostel, IIT Varanasi (BHU)
                </address>
              </Col>
            </Row>
          </section>
          <hr className="my-3" />
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  Praukcy
                </div>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a>
                  <FaInstagram className="social-icons"></FaInstagram>
                </a>
                <a>
                  <FaFacebook className="social-icons"></FaFacebook>
                </a>
                <a href='https://www.linkedin.com/company/praukcy/'>
                  <FaLinkedin className="social-icons"></FaLinkedin>
                </a>
                <a>
                  <FaTwitter className="social-icons"></FaTwitter>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};
const Popup = (props) => {  
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
    <AddForm/>
    <Button variant='dark' onClick={props.onHide}>Close</Button>
    </Modal>
  ); 
}
export default Footer;