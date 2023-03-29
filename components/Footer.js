import React, { useContext, useState } from 'react'
import { Row, Col, Button, Modal } from "react-bootstrap";
import Image from "next/image";
import formContext from "./FormContext";
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
      <footer
        className="text-center text-lg-start text-black myfooter"
      >
        <div className="container p-4 pb-0">
          <section className="">
            <Row>
              < Col >
              <a><Image src={logo} height={100} alt='' /></a>
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
                  Head Office: Room No.- 242,<br />Dhanrajgiri Hostel, IIT Varanasi (BHU)
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
  const context = useContext(formContext);

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const { addForm } = context;

  const clearClick=()=>{
    setForm({ name: '', email: '', subject: '', message: '' })
  }
  const handleClick = (e) => { 
    e.preventDefault();
    addForm(form.name, form.email, form.subject, form.message);
    setForm({ name: '', email: '', subject: '', message: '' });
  }
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" className='modal2'centered>
      <div className='popup2'>
      <form className='addform2'>
      <h2>Send Message</h2>
      <div className='messcontainer'>
        <div className="messdetail">
          <h5 htmlFor="title" className="form-label">Name</h5>
          <input type="text" className="" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} value={form.name} />
        </div>
        <div className="mb-3 messdetail">
          <h5 htmlFor="email" className="form-label">Email</h5>
          <input type="text" className="" id="email" name="email" onChange={onChange} value={form.email} />
        </div>
        <div className="mb-3 messdetail">
          <h5 htmlFor="subject" className="form-label">Subject</h5>
          <input type="text" className="" id="subject" name="subject" onChange={onChange} value={form.subject} />
        </div>
        <div className="mb-3 messdetail">
          <h5 htmlFor="message" className="form-label">Message</h5>
          <textarea placeholder='Write your message here' rows={10} type="text" className="" id="message" name="message" onChange={onChange} value={form.message} />
        </div>
      <button type="submit" className="btn btn-primary" onClick={function(event){handleClick();props.onHide}}>Submit</button>
      <button type="button" className="btn1 btn-primary" onClick={clearClick}>Clear</button>
      </div>
    </form>
        <Button variant='transparent' onClick={props.onHide}>Close</Button>
      </div>
    </Modal>
  );
}
export default Footer;