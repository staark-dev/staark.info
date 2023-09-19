// Import React Hooks and Library
import { Fragment } from "react";
import Header from "../../layouts/Header";
import Layout from "../../layouts/Main";
import Footer from "../../layouts/Footer";

export default function FAQ() {
    return (<Fragment>
        <Header />
        <Layout>
            <div className="container">
            <h1>Page FAQ works !</h1>
            </div>
        </Layout>
        <Footer />
    </Fragment>)
}