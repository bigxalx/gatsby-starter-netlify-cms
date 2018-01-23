import React from 'react';
import Link from 'gatsby-link';
import logo from '../img/logo.png';
import '../style/hover.css'


// noinspection JSAnnotator
export default () => (
    <nav className="navbar">
        <div className="navbarContainer">
            <div className="navbarBrand">
                <Link to="/" className="navbar-item">
                    <figure style={{ top: 0, margin: 0, padding: 22}}>
                        <img src={logo} alt="Adrienn Bazsó" className="logo" style={{ maxWidth: 272 }} />
                    </figure>
                </Link>
            </div>
            <ul className="navbar-start">
                <li className="navbar-item neues neues-effekt" >
                    <Link
                        to="/neues"
                        activeStyle={{
                            backgroundColor: "#F71C1C",
                            color: "black"

                        }}
                    >
                        Neues
                    </Link>
                </li>

                <li className="navbar-item projekte projekte-effekt">
                    <Link
                        to="/projekte"
                        activeStyle={{
                            backgroundColor: "#FAD961",
                            color: "black"

                        }}
                    >
                        Projekte
                    </Link>
                </li>
                <li className="navbar-item about about-effekt">
                    <Link
                        to="/about"
                        activeStyle={{
                            backgroundColor: "#6168FA",
                            color: "black"

                        }}
                    >

                        Vita
                    </Link>
                </li>
                <li className="navbar-item kontakt kontakt-effekt">
                    <Link
                        to="/contact"
                        activeStyle={{
                            backgroundColor: "#F21CF7",
                            color: "black"

                        }}
                    >
                        Kontakt
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

