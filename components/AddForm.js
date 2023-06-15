import React, { useContext, useState } from 'react'
import formContext from "./FormContext";
import { Col, Row } from 'react-bootstrap';
import { CiLocationOn } from "react-icons/ci";
import { FaEnvelope } from 'react-icons/fa';
import { IoCallOutline } from "react-icons/io5";

const AddForm = () => {
  const context = useContext(formContext);

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const { addForm } = context;

  const clearClick = () => {
    setForm({ name: '', email: '', subject: '', message: '' })
  }
  const handleClick = (e) => {
    e.preventDefault();
    addForm(form.name, form.email, form.subject, form.message);
    setForm({ name: '', email: '', subject: '', message: '' })
  }
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <form className='c2'>
      <Row>
        <Col className='c1'>
          <h2>Contact Information</h2>
          <CiLocationOn></CiLocationOn><span>Sleeknote ApS Ankersgade 12C, 1, 8000 Aarhus</span>
          <IoCallOutline></IoCallOutline><span style={{ margin: 'auto 10px' }}><a href='tel: 8209181991'>+91-8209181991</a></span>
          <FaEnvelope></FaEnvelope><span style={{ margin: 'auto 5px' }}><a href='mailto: praukcy@gmail.com'>praukcy@gmail.com</a></span>
          <Col className='contactheadcol'>
          <h3>Need help? Questions?</h3>
          <span> {`We're here for you! Our service team is ready to assist and address your queries. Looking forward to hearing from you soon! Let us know how we can help.`}</span>
        </Col>
        </Col>
        <Col>
          <h3>Send Message</h3>
          <div className='c4'>
            <div className="mb-3">
              <h6 htmlFor="title" className="form-label">Name</h6>
              <input type="text" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} value={form.name} />
            </div>
            <div className="mb-3">
              <h6 htmlFor="email" className="form-label">Email</h6>
              <input type="text" id="email" name="email" onChange={onChange} value={form.email} />
            </div>
            <div className="mb-3">
              <h6 htmlFor="subject" className="form-label">Subject</h6>
              <input type="text" id="subject" name="subject" onChange={onChange} value={form.subject} />
            </div>
            <div className="mb-3">
              <h6 htmlFor="message" className="form-label">Message</h6>
              <textarea placeholder='Write your message here' rows={7} type="text" id="message" name="message" onChange={onChange} value={form.message} />
            </div>
            <button type="submit" className="btn btn-dark" onClick={handleClick}>Submit</button>
            <button type="submit" className="btn1 btn btn-dark" onClick={clearClick}>Clear</button>
          </div>
        </Col>
      </Row>
    </form>
  )
}

export default AddForm