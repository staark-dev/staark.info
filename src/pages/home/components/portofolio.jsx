import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

// FontAwesome Icons Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

// Product List
import ProductList from "./portofolioList";

const Portofolio = () => {
    return (<div className="container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Projects</h1>
            <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
        </div>

        <div className="card-deck mb-3 text-center">
        {ProductList.map((data) => (
            <div className="card mb-4 box-shadow">
                <div class="card-body text-center">
                    <h4>{data.title}</h4>
                    <h6 class="card-subtitle mb-2 text-muted">{data.description}</h6>
                    <br />
                    <Link to={data.link} class="card-link btn btn-sm btn-primary"><FontAwesomeIcon icon={icon({name: 'user-secret'})} /> Project on Github</Link>
                </div>
                <div class="card-footer">
                    <small class="text-muted mx-4 text-right"><FontAwesomeIcon icon={icon({name: 'clock', style: 'solid'})} /> Last updated {data.last_update} | <span class="text-center p-1 mb-0 bg-dark text-white rounded-sm">Dev - {data.author}</span></small>
                </div>
            </div>
        ))}
        </div>
        <Outlet />
    </div>);
}

export default Portofolio;