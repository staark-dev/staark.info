// Import React Hooks and Library
import { Fragment } from "react";
import Header from "../../layouts/Header";
import Layout from "../../layouts/Main";
import Footer from "../../layouts/Footer";
import Portofolio from "./components/portofolio";
import AboutMe from "./components/aboutme";

export default function Home() {
    return (
        <Fragment>
            <Header />
            <Layout>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-2">Staark Development</h1>
                </div>
            </div>
            <AboutMe />
            <Portofolio />
            </Layout>
            <Footer />
        </Fragment>
    )
}