import React from 'react';
import Link from 'gatsby-link';
import logo from '../img/logo.png';
import '../style/hover.css'


export default () => (
    <nav className="navbar">
        <div className="navbarContainer">
            <ul className="navbar-start">
                <li className="navbar-item neues neues-effekt" >
                    <Link
                        to="/neues"
                        activeStyle={{

                        }}
                    >
                        Neues
                    </Link>
                </li>

                <li className="navbar-item projekte projekte-effekt">
                    <Link to="/projekte">
                        Projekte
                    </Link>
                </li>
                <li className="navbar-item about about-effekt">
                    <Link to="/about">
                       Vita
                    </Link>
                </li>
                <li className="navbar-item kontakt kontakt-effekt">
                    <Link to="/contact">
                        Kontakt
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);
