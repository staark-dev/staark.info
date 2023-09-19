import React, { Fragment, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import moment from 'moment';

// FontAwesome Icons Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faPhp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faCircleQuestion, faLock, faLockOpen, faStar } from "@fortawesome/free-solid-svg-icons";

const Portofolio = () => {
    const [user, setUser] = useState([]);

    const fetchRepos = () => {
        fetch(`https://api.github.com/users/staark-dev/repos?sort=created&direction=dsc&per_page=7`)
        .then((response) => (response.json()))
        .then((data) => {
            if (data.length === 0) { 
                return false;
            }else {
                setUser([...user, ...data]);
            }
        })
    };

    useEffect(() => {
        fetchRepos();
    }, []);

    const fetchLanguage = (lang) => {
        switch(lang) {
            case "PHP":
                return <FontAwesomeIcon icon={faPhp} title="PHP Language Type" />;
                break;
            case "JavaScript":
                return <FontAwesomeIcon icon={faJsSquare} title="JavaScript Language Type" />;
                break;
            case null:
                return <FontAwesomeIcon icon={faCircleQuestion} title="Unknow Language Type" />;
        }
    };

    const fetchVisibility = (status) => {
        switch(status) {
            case "public":
                return <FontAwesomeIcon icon={faLockOpen} title="Open for Fork"/>;
                break;
            case "private":
                return <FontAwesomeIcon icon={faLock} />;
        }
    };


    return (<div className="container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Projects</h1>
            <p class="lead">Quickly build an effective projects table for your potential customers with this model. It's built with default <i>Bootstrap components</i> and utilities with little customization.</p>
        </div>
        <br />
        <br />
        <div className="card-deck mb-3 text-center">
        {user.map((data) => (
            <div className="card mb-4 box-shadow">
                <div class="card-body text-center">
                    <h4>{data.description}</h4>
                    <h6 class="card-subtitle mb-2 text-muted">{ fetchVisibility(data.visibility) } {data.name}</h6>
                    <br />
                    <span class="text-center p-1 mb-5 bg-dark text-white rounded-sm">{ fetchLanguage(data.language) }&nbsp;&nbsp;{data.stargazers_count} <FontAwesomeIcon icon={faStar} /></span>
                    <br /><br />
                    <Link to={data.svn_url} class="card-link btn btn-sm btn-primary"> View on <FontAwesomeIcon icon={faGithub} /> </Link>
                    <Link to={`${data.svn_url}/fork`} class="card-link btn btn-sm btn-warning"> Forks on <FontAwesomeIcon icon={faGithub} /> </Link>
                </div>
                <div class="card-footer">
                    <small class="text-muted mx-4 text-right"><FontAwesomeIcon icon={icon({name: 'clock', style: 'solid'})} /> Last updated { moment(data.created_at).fromNow() } by <span class="text-center p-1 mb-0 bg-dark text-white rounded-sm">{data.owner.login}</span></small>
                </div>
            </div>
        ))}
        </div>
        <Outlet />
    </div>);
}

export default Portofolio;