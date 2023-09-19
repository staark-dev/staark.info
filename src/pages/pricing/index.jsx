// Import React Hooks and Library
import { Fragment } from "react";
import Header from "../../layouts/Header";
import Layout from "../../layouts/Main";
import Footer from "../../layouts/Footer";

export default function Pricing() {
    return (<Fragment>
        <Header />
        <Layout>
            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Pricing</h1>
                <p class="lead">Do you need a presentation page, or do you want something more special? Below you can find my available packages for such services.<br />I also offer support for codes already created or for certain changes on the following platforms. WoodPress, PhpBB, Custom PHP (Laravel, Open Source PHP).
                <br />If you need, you can use the contact page in the menu and we can discuss.</p>
            </div>
            <div className="container">
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div class="card-header" style={{'background-color': "#c0c0c0"}}>
                            <h4 className="my-0 font-weight-normal">Silver</h4>
                        </div>
                        <div className="card-body">
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>3 Pages included</li>
                                <li className="text-center text-success">Estimated time delivery: 3 - 5 days</li>
                                <li className="text-center text-success">Help email access</li>
                                <li className="text-center text-danger"><s>PSD Files included</s></li>
                                <li className="text-center text-danger"><s>Source code support</s></li>
                                <li className="text-center text-danger"><s>Library support included</s></li>
                                <li className="text-center text-danger"><s>MySQL suport included</s></li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-4 box-shadow">
                        <div className="card-header" style={{'background-color': '#E5E4E2'}}>
                            <h4 className="my-0 font-weight-normal">Platinum</h4>
                        </div>
                        <div className="card-body">
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>7 Pages included</li>
                                <li className="text-center text-warning">Estimated time delivery: 10 - 15 days</li>
                                <li className="text-center text-success">Help email access</li>
                                <li className="text-center text-success">PSD Files included</li>
                                <li className="text-center text-danger">Source code support</li>
                                <li className="text-center text-danger"><s>Library support included</s></li>
                                <li className="text-center text-danger"><s>MySQL suport included</s></li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-4 box-shadow">
                        <div className="card-header" style={{'background-color': '#FFD700'}}>
                            <h4 className="my-0 font-weight-normal">Gold</h4>
                        </div>
                        <div className="card-body">
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>12 Pages included</li>
                                <li className="text-center text-secoundary">Estimated time delivery: 15 - 20 days</li>
                                <li className="text-center text-success">Help email access</li>
                                <li className="text-center text-success">PSD Files included</li>
                                <li className="text-center text-success">Source code support</li>
                                <li className="text-center text-danger">Library support included</li>
                                <li className="text-center text-danger"><s>MySQL suport included</s></li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-4 box-shadow">
                        <div className="card-header bg-primary">
                            <h4 className="my-0 font-weight-normal text-white">Custom</h4>
                        </div>
                        <div className="card-body">
                            <h1 class="card-title pricing-card-title">$45 <small class="text-muted">/ h</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li className="text-center text-success">Unlimited Pages included</li>
                                <li className="text-center text-success">Help email access</li>
                                <li className="text-center text-success">PSD Files included</li>
                                <li className="text-center text-success">Source code support</li>
                                <li className="text-center text-success">Library support included</li>
                                <li className="text-center text-success">MySQL suport included</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        <Footer />
    </Fragment>)
}