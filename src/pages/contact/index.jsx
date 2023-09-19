// Import React Hooks and Library
import React, { Fragment } from "react";
import Header from "../../layouts/Header";
import Layout from "../../layouts/Main";
import Footer from "../../layouts/Footer";
import logo from "../contact/images/mail.png";
import FormSendEmails from "../../hooks/sendMail";

export default function Contact() {
    return (<Fragment>
        <Header />
        <Layout>
            <img src={logo} alt="" className="background" />
            <div class="container my-5" style={{width: "960px", float: "right" }}>
                <FormSendEmails />
            </div>
        </Layout>
        <Footer />
    </Fragment>)
}