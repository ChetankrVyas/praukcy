import { useState } from "react";
import FormContext from "./FormContext";

const FormState = (props) => {
    const host = "https://praukcy-backend.onrender.com";
    const formInitial = []
    const [forms, setForms] = useState(formInitial)
    const clientformInitial = []
    const [clientforms, setClientforms] = useState(clientformInitial)
    // get forms filled
    const getForms = async () => {
        // API Call  
        const response = await fetch(`${host}/api/form/fetchallforms`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json()
        setForms(json)
    }
    // add a form 
    const addForm = async (name, email, subject, message) => {
        // TODO: API Call
        // API Call 
        const response = await fetch(`${host}/api/form/addform`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message })
        });
        const form = await response.json();
        setForms(forms.concat(form))
    }
    // get clientforms filled
    const getClientforms = async () => {
        // API Call 
        const response = await fetch(`${host}/api/clientform/fetchallclientforms`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json()
        setClientforms(json)
    }
    // client form 
    const clientForm = async (name, email, pnumber, orgname, project, description, attachment) => {
        // TODO: API Call
        // API Call 
        const response = await fetch(`${host}/api/clientform/addclientform`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, pnumber, orgname, project, description, attachment })
        });
        const clientform = await response.json();
        setClientforms(clientforms.concat(clientform))
    }
    return (
        <FormContext.Provider value={{ forms, addForm, getForms, clientForm, getClientforms }}>
            {props.children}
        </FormContext.Provider>
    )
}
export default FormState;