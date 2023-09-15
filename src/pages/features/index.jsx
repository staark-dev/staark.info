// Import React Hooks and Library
import { Fragment } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Layout from "layouts/Main";

export default function Features() {
    return (<Fragment>
        <Header />
        <Layout>
            <h1>Page Features works !</h1>
        </Layout>
        <Footer />
    </Fragment>)
}