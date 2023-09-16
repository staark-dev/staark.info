// Import React Hooks and Library
import React, { Fragment, useState } from "react";
import Header from "../../layouts/Header";
import Layout from "../../layouts/Main";
import Footer from "../../layouts/Footer";
import logo from "../contact/images/mail.png";
import FormMail from "../../hooks/sendMail";

export default function Contact() {
    //const sendMail = useState(false);

    return (<Fragment>
        <Header />
        <Layout style={{heigh: "100vh"}}>
            <img src={logo} alt="" className="background" />
            <div class="container my-5" style={{width: "960px", float: "right" }}>
                <FormMail />
            </div>
        </Layout>
        <Footer />
    </Fragment>)
}