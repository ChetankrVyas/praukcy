import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaPhone, FaEnvelope, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import {IoCall} from 'react-icons/io5'

const Contactus = () => {
  return (
    <div>
      <Row >
        <Col style={{ display: 'flex' }}>
          <a style={{ margin: 'auto 0px auto 20px' }}><IoCall></IoCall></a>
          <h6 style={{ margin: 'auto 10px' }}><a style={{ color: 'black' }} href='tel: 8209181991'>+91-8209181991</a></h6>
          <div style={{ width: "1px", height: '32px', margin: '0', backgroundColor: 'white' }}></div>
          <a style={{ margin: 'auto 5px' }}><FaEnvelope></FaEnvelope></a>
          <h6 style={{ margin: 'auto 5px' }}><a href='mailto: praukcy@gmail.com'>praukcy@gmail.com</a></h6>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'right', marginRight: '40px' }}>
          <p style={{ margin: 'auto 5px', float: 'right' }}>Follow Us now </p>
          <a style={{ margin: 'auto 5px' }}><FaInstagram></FaInstagram></a>
          <a style={{ margin: 'auto 5px' }}><FaTwitter></FaTwitter></a>
          <a style={{ margin: 'auto 5px', float: 'right' }}><FaLinkedin></FaLinkedin></a>
        </Col>
      </Row>
    </div>
  )
}
export default Contactus
