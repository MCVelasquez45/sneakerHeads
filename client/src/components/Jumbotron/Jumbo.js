import React from "react";
import { Link } from "react-router-dom";
import './Jumbo.css';
import myLogo from '../../images/SneakerHeadLogo.jpeg';

const Jumbo = () => {
    return (
        <div className="jumbotron">
            <img src={myLogo} alt="Sneaker Head Logo" className="jumbo-logo" />
            <h1 className="display-4">Welcome to Sneaker Heads & Company</h1>
            <p className="lead">Step up your sneaker game with us! Explore the freshest drops, secure your favorites, and stay ahead of the curve. Whether you're a dedicated collector or a casual enthusiast, we've got something for every sneaker lover. Happy shopping!</p>
            <hr className="my-4"></hr>
            <p>Feel free to customize it further to fit your brand's tone and style!</p>
            <Link className="btn btn-primary btn-lg" to="/catalog" role="button">Shop Now</Link>
        </div>
    );
}

export default Jumbo;
