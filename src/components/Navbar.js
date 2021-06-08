import React from 'react';
import logo from '../img/logo.png';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className="NavBar">
            <div className="profile">
                <img src={logo} alt=""/>
                <ul>
                    <li>Designer</li>
                    <li>Front-end Designer</li>
                </ul>
            </div>
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" exact activeClassName="active">
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blog" exact activeClassName="active">
                            Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <footer className="footer">
                <ul className="social-menu">
                    <li>
                        <Link to="www.github.com" className="icon">
                            <FontAwesomeIcon icon={faGithub} />
                        </Link>
                    </li>
                    <li>
                        <Link to="www.linkedin.com" className="icon">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                    </li>
                    <li>
                        <Link to="www.youtube.com" className="icon">
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                    </li>
                    <li>
                        <Link to="www.codepen.com" className="icon">
                            <FontAwesomeIcon icon={faCodepen} />
                        </Link>
                    </li>
                </ul>
                <p>© Eunice Dhivya 2021. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Navbar
