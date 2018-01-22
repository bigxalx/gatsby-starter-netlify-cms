import React from 'react';
import Link from 'gatsby-link';
import logo from '../img/logo.svg';


export default () => (
    <nav className="navbar">
        <div className="navbarContainer">
            <div className="navbarBrand">
                <Link to="/" className="navbar-item">
                    <figure className="image">
                        <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
                    </figure>
                </Link>
            </div>
            <div className="navbar-start">
                <Link className="navbar-item" to="/about">
                    About
                </Link>
                <Link className="navbar-item" to="/products">
                    Products
                </Link>
            </div>
        </div>
    </nav>
);
