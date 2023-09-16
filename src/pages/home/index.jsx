// Import React Hooks and Library
import { Fragment } from "react";
import Header from "../../layouts/Header";
import Layout from "../../layouts/Main";
import Footer from "../../layouts/Footer";
import Portofolio from "./components/portofolio";

export default function Home() {
    return (
        <Fragment>
            <Header />
            <Layout>
                <h1 className="text-center text-secoundary">Welcome to Staark Development</h1>
                <br />
                <Portofolio />
            </Layout>
            <Footer />
        </Fragment>
    )
}