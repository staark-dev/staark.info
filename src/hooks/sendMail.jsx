import React, { useState, useRef, Fragment } from "react";
import { Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';

export const FormSendEmails = () => {
    const form = useRef();
    const [errorMessages, setErrorMessages] = useState([]);
    const [showErrors, setShowErrors] = useState(false);

    let errors = [];

    // Send emails using library EmailJS
    const sendEmail = (e) => {
        e.preventDefault();
        sendFormValidation(e);
    };

    const validStr = (str) => str ? true : false;

    /*let validateEmail = (email) => {
        return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };*/

    const sendFormValidation = (e) => {
        setErrorMessages([]);

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }

            let label = inputs[i].id.replace("contact", "", inputs[i].id);

            if( !validStr(inputs[i].value) ) errors.push(label + " is not valid, please try again.");
        }

        if (errors.length > 0) {
            setShowErrors({ showErrors: true });
            setErrorMessages(errors);
        } 
        else {
            setShowErrors({ showErrors: false });
            emailjs.sendForm('service_eisb8mm', 'template_7c27wdi', form.current, '40mv4rjxYp44UQTWs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
    };

    return (
        <Fragment>
            <div className="row justify-content-center">
                <div className="col-12 col-md-12 col-lg-10">
                    <h1 class="mb-3">Contact Us</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        { showErrors ? errorMessages.map((item) => { 
                            return (<Alert variant="danger">{item}</Alert>); 
                        }) : null }
                        
                        <div className="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group mb-5">
                                    <label class="form-label" for="contactName">Full Name</label>
                                    <input className="form-control" label="Name" name="user_name" id="contactName" type ="text" />
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-group mb-5">
                                    <label class="form-label" for="contactEmail">Email</label>
                                    <input className="form-control" name="user_email" label="Email" id="contactEmail" type ="email" />
                                </div>
                            </div>

                            <div class="col-12 col-md-12">
                                <div class="form-group mb-5">
                                    <label class="form-label" for="contactSubject">Subject</label>
                                    <input className="form-control" label="Subject" id="contactSubject" type ="text" />
                                </div>
                            </div>

                            <div class="col-12 col-md-12">
                                <div class="form-group mb-5">
                                    <label class="form-label" for="contactMessage">Message</label>
                                    <textarea className="form-control" name="message" rows="4" id="contactMessage" label="Message" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-primary btn-sm btn btn-success" type="submit">Send me Mail!</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default FormSendEmails;