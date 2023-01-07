import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaPhone, FaEnvelope, FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa'

const Contactus = () => {
  return (
    <div style={{color:'white',border:'2px solid white'}}>
      <Row >
        <Col style={{display:'flex'}}>
        <a style={{margin:'auto 10px'}}><FaPhone></FaPhone></a><h6 style={{margin:'auto 30px'}}>+91-8209181991</h6>
        <div style={{width:"1px",height:'32px',margin:'0',backgroundColor:'white'}}></div>
        <a style={{margin:'auto 5px'}}><FaEnvelope></FaEnvelope></a><h6 style={{margin:'auto 5px'}}> info@praukcy.com</h6>
        </Col>
        <Col style={{display:'flex',justifyContent:'right'}}>
        <p style={{margin:'auto 5px',float:'right'}}>Follow Us now </p>
        <a style={{margin:'auto 5px'}}><FaInstagram></FaInstagram></a>
        <a style={{margin:'auto 5px'}}><FaTwitter></FaTwitter></a>
        <a style={{margin:'auto 5px',float:'right'}}><FaLinkedin></FaLinkedin></a>
        </Col>
      </Row>
    </div>
  )
}

export default Contactus
