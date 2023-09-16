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
                    <h1 class="display-3">Welcome to Staark Development</h1>
                    <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                    <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
                </div>
            </div>
            <Portofolio />
            </Layout>
            <Footer />
        </Fragment>
    )
}