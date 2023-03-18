import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import formContext from "./FormContext";
import { CiLocationOn } from "react-icons/ci";
import { FaEnvelope } from 'react-icons/fa';
import { IoCallOutline } from "react-icons/io5";

const AddForm = () => {
  const context = useContext(formContext);

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const { addForm } = context;

  const clearClick=()=>{
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
    <form className=''>
      <h2>Send Message</h2>
      <div className=''>

        <div className="">
          <h5 htmlFor="title" className="form-label">Name</h5>
          <input type="text" className="" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} value={form.name} />
        </div>
        <div className="mb-3">
          <h5 htmlFor="email" className="form-label">Email</h5>
          <input type="text" className="" id="email" name="email" onChange={onChange} value={form.email} />
        </div>
        <div className="mb-3">
          <h5 htmlFor="subject" className="form-label">Subject</h5>
          <input type="text" className="" id="subject" name="subject" onChange={onChange} value={form.subject} />
        </div>
        <div className="mb-3">
          <h5 htmlFor="message" className="form-label">Message</h5>
          <textarea placeholder='Write your message here' rows={10} type="text" className="" id="message" name="message" onChange={onChange} value={form.message} />
        </div>
      <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
      <button type="submit" className="btn1 btn-primary" onClick={clearClick}>Clear</button>
      </div>
    </form>
  )
}

export default AddForm