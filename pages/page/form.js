import {React, useContext, useState } from 'react'
import formContext from "../context/forms/FormContext";
import style from '../../styles/form.module.scss'

const Form = () => {
    const context = useContext(formContext);

    const [form, setForm] = useState({ name: '', email: '', pnumber: '', orgname: '', project: '', description: '', attachment: '' })
    const { clientForm } = context;
    const handleClick = (e) => {
        e.preventDefault();
        clientForm(form.name, form.email, form.pnumber, form.orgname, form.project, form.description, form.attachment);
        setForm({ name: '', email: '', pnumber: '', orgname: '', project: '', description: '', attachment: '' })
    }
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className={style.header}></div>
            <div className={style.form}>
                <section className={style.section}>
                    <div className={style.entry}>
                        <h5 htmlFor="title">Name</h5>
                        <input type="text" className={style.input} id="name" name="name" aria-describedby="emailHelp" onChange={onChange} value={form.name} />
                    </div>
                    <div className={style.entry}>
                        <h5 htmlFor="email" className="">Email</h5>
                        <input type="text" className={style.input} id="email" name="email" onChange={onChange} value={form.email} />
                    </div>
                    <div className={style.entry}>
                        <h5 htmlFor="pnumber" className="">Contact Number</h5>
                        <input type="text" className={style.input} id="pnumber" name="pnumber" onChange={onChange} value={form.pnumber} />
                    </div>
                    <div className={style.entry}>
                        <h5 htmlFor="orgname" className="">Name of your organization or company</h5>
                        <input type="text" className={style.input} id="orgname" name="orgname" onChange={onChange} value={form.orgname} />
                    </div>
                    <div className={style.entry}>
                        <h5 htmlFor="project" className="">How can we serve you?</h5>
                        {/* <select id="project" name='project' onChange={onChange} value={form.project}>
                        <option value="none">Select an Option</option>
                        <option value="1">website</option>
                        <option value="2">Android Application</option>
                        <option value="3">Chatbot</option>
                        <option value="3">photo and video edititng</option>
                        <option value="3">Chatbot</option>
                        <option value="3">Chatbot</option>
                    </select> */}
                        <input type="text" className={style.input} id="project" name="project" onChange={onChange} value={form.project} />
                    </div>
                    <div className={style.entry}>
                        <h5 htmlFor="description" className="">Give brief description about your project</h5>
                        <input type="text" className={style.input} id="description" name="description" onChange={onChange} value={form.description} />
                    </div>
                    <div className={style.entry}>
                        <h5 htmlFor="attachment" className="">You can attach the project details and docs link here</h5>
                        <input type="text" className={style.input} id="attachment" name="attachment" onChange={onChange} value={form.attachment} />
                        {/* <input type="file" className={style.input} id="attachment" name="attachment" onChange={onChange} value={form.attachment}/> */}
                    </div>
                    <button type="submit" className={style.btn} onClick={handleClick}>Submit</button>
                </section>
            </div>
        </>
    )
}

export default Form