import React, { Fragment, useState } from "react";
import { Alert } from "react-bootstrap";

export default function FormMail() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [errorMessages, setErrorMessages] = useState([]);
    const [showErrors, setShowErrors] = useState(false);

    let errors = [];

    /*const ValidateEmail = (email) => {
        if(new RegExp(/\S+@\S+\.\S+/).test(email)) {
            return true;
        }

        return false;
    }*/

    const formValidation = () => {
        setErrorMessages([]);

        const isNameValid = (name !== "");
        const isMessageValid = ( message !== "");
        const isSubjectValid = (subject !== "");

        if(!isNameValid) errors.push("Name is not valid, please try again.");
        if(!email) errors.push("Email field is empty, please try again.");
        if(!isMessageValid) errors.push("Message is not valid, please try again.");
        if (!isSubjectValid) errors.push("Subject is not valid, please try again.");
        if (errors.length > 0) {
            setShowErrors({ showErrors: true });
            setErrorMessages(errors);
        } 
        else {
            setShowErrors({ showErrors: false });
            alert("Email Sent");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        { showErrors ? errorMessages.map((item) => {
                console.log("");
                console.log(item);
            }) : console.log("Submiting form../r/n" + data);
        }
    }


    return (
        <Fragment>
            <div className="row justify-content-center">
                <div className="col-12 col-md-12 col-lg-10">
                    <h1 class="mb-3">Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        { showErrors ? errorMessages.map((item) => { 
                            return (<Alert variant="danger">{item}</Alert>); 
                        }) : null }
                        
                        <div className="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group mb-5">
                                    <label class="form-label" for="contactName">Full Name</label>
                                    <input className="form-control" label="Name" id="contactName" type ="text" onChange = {e => setName({name: e.target.value})} />
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-group mb-5">
                                    <label class="form-label" for="contactEmail">Email</label>
                                    <input className="form-control" label="Email" id="contactEmail" type ="email" onChange ={e => setEmail({email: e.target.value})} />
                                </div>
                            </div>

                            <div class="col-12 col-md-12">
                                <div class="form-group mb-5">
                                    <label class="form-label" for="contactSubject">Subject</label>
                                    <input className="form-control" label="Subject" id="contactSubject" type ="text" onChange ={e => setSubject({subject: e.target.value})} />
                                </div>
                            </div>

                            <div class="col-12 col-md-12">
                                <div class="form-group mb-5">
                                    <label class="form-label" for="contactMessage">Message</label>
                                    <textarea className="form-control" rows="4" id="contactMessage" label="Message" onChange ={e => setMessage({message: e.target.value})} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-primary btn-sm btn btn-success" onClick={formValidation} type="submit">Send me Mail!</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}