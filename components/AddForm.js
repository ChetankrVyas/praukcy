import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import formContext from "../pages/context/forms/FormContext";

const AddForm = () => {
    const context = useContext(formContext);
    
    const [form, setForm] = useState({name:'',email:'',subject:'',message:''})
    const {addForm} = context;

    const handleClick = (e) => {
      e.preventDefault();
      addForm(form.name, form.email, form.subject, form.message);
      setForm({name:'',email:'',subject:'',message:''})
    }
    const onChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value })
  }
    return (
      <form className='c2'>
        <h2>Send Message</h2>
        <Row>
          <Col>
            {/* <Image alt='' /> */}
          </Col>
          <Col>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Name</label>
              <input type="text" className="" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} value={form.name} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="text" className="" id="email" name="email" onChange={onChange} value={form.email} />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">subject</label>
              <input type="text" className="" id="subject" name="subject" onChange={onChange} value={form.subject} />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <input type="text" className="" id="message" name="message" onChange={onChange} value={form.message} />
            </div>
          </Col>
        </Row>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
      </form>
    )
  }

  export default AddForm