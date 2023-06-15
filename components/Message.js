import React, { useContext, useState } from 'react'
import formContext from "./FormContext";
import { Col, Row } from 'react-bootstrap';
import { CiLocationOn } from "react-icons/ci";
import { FaEnvelope } from 'react-icons/fa';
import { IoCallOutline } from "react-icons/io5";

const Message = () => {
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
    <form className='c2 messageform'>
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
    </form>
  )
}

export default Message