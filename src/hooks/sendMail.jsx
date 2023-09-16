import React, { Fragment, useState } from "react";

export default function FormMail() {
    const [sendMail, handelSubmit] = useState(0);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [errorMessages, setErrorMessages] = useState([]);
    const [showErrors, setShowErrors] = useState(false);

    return (
        <Fragment>
            <div className="row justify-content-center">
                <div className="col-12 col-md-12 col-lg-10">
                    <h1 class="mb-3">Contact Us</h1>
                    <form>
                        <div className="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group mb-5">
                                    <label class="form-label" for="contactName">Full Name</label>
                                    <input className="form-control" label="Name" type ="text" onChange = {e => setName({name: e.target.value})} />
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-group mb-5">
                                    <label class="form-label" for="contactEmail">Email</label>
                                    <input className="form-control" label="Email" type ="email" onChange ={e => setEmail({email: e.target.value})} />
                                </div>
                            </div>

                            <div class="col-12 col-md-12">
                                <div class="form-group mb-5">
                                    <label class="form-label" for="contactEmail">Subject</label>
                                    <input className="form-control" label="Subject" type ="text" onChange ={e => setSubject({subject: e.target.value})} />
                                </div>
                            </div>

                            <div class="col-12 col-md-12">
                                <div class="form-group mb-5">
                                    <label class="form-label" for="contactEmail">Message</label>
                                    <textarea className="form-control" rows="4" label="Message" onChange ={e => setMessage({message: e.target.value})} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-primary btn-sm btn btn-success" type="button">Send me Mail!</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}