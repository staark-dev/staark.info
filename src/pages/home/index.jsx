// Import React Hooks and Library
import { Fragment } from "react";
import Header from "../../layouts/Header";
import Layout from "../../layouts/Main";
import Footer from "../../layouts/Footer";

export default function Home() {
    return (
        <Fragment>
            <Header />
            <Layout>
                <h1>Home Page Work !</h1>
            </Layout>
            <Footer />
        </Fragment>
    )
}