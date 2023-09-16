import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

// FontAwesome Icons Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

// Product List
import ProductList from "./portofolioList";

const Portofolio = () => {
    return (<Fragment>
        <h5 className="text-sm text-centre text-info">Portofolio and Products</h5>

        <div class="card-group">
        {ProductList.map((data) => (
            <div className="card mb-4 box-shadow">
                <div class="card-header">{data.title}</div>
                <div class="card-body text-center">
                    <h6 class="card-subtitle mb-2 text-muted">{data.description}</h6>
                    <br />
                    <Link to={data.link} class="card-link btn btn-sm btn-primary"><FontAwesomeIcon icon={icon({name: 'user-secret'})} /> Project on Github</Link>
                </div>
                <div class="card-footer">
                    <small class="text-muted mx-4 text-right"><FontAwesomeIcon icon={icon({name: 'clock', style: 'solid'})} /> Last updated {data.last_update} | Author <span class="text-center text-info">{data.author}</span></small>
                </div>
            </div>
        ))}
        </div>
        <Outlet />
    </Fragment>);
}

export default Portofolio;