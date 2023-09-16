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
            <div class="jumbotron">
                <div class="container">
                    <h1 class="display-2">Staark Development</h1>
                    <p>Hello my name is Costin Ionuț, 29 years old, Worked at Web Developer la Self-Employed. There is my work of old years.</p>
                </div>
            </div>
            <Portofolio />
            </Layout>
            <Footer />
        </Fragment>
    )
}