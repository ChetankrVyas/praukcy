import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {FaEnvelope, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import {IoCall} from 'react-icons/io5'

const Contactus = () => {
  return ( 
    <div>
      <Row className='contact-row'>
        <Col className='contact-phone' style={{ display: 'flex', margin:'auto' }}>
          <a style={{ margin: 'auto 0px auto 1%' }}><IoCall></IoCall></a>
          <h6 style={{ margin: 'auto 10px' }}><a  href='tel: 8209181991'>+91-8209181991</a></h6>
          <div style={{ width: "2px", height: '32px', marginTop: '4px', backgroundColor: 'black' }}></div>
          <a style={{ margin: 'auto 5px' }}><FaEnvelope></FaEnvelope></a>
          <h6 style={{ margin: 'auto 5px' }}><a href='mailto: praukcy@gmail.com'>praukcy@gmail.com</a></h6>
        </Col>
        <Col className='contact-social'>
          <p style={{ margin: 'auto 5px', float: 'right' }}>Follow Us now </p>
          <a  style={{ margin: 'auto 5px' }}><FaInstagram></FaInstagram></a>
          <a style={{ margin: 'auto 5px' }}><FaTwitter></FaTwitter></a>
          <a href='https://www.linkedin.com/company/praukcy/' style={{ margin: 'auto 25px auto 5px', float: 'right' }}><FaLinkedin></FaLinkedin></a>
        </Col>
      </Row>
    </div>
  )
}

export default Contactus
