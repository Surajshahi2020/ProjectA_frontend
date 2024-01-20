// Navbar.js
import React from 'react';
import './Navbar.css';
import LogoImage from '../../images/logo.png'; // Import the logo image

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logo-img" src={LogoImage} alt="Logo" />
            </div>
            <div className="navcenter">
                <a href="#feature1">Dashboard</a>
                <a href="#feature2">Training</a>
                <a href="#feature3">Promotion</a>
                <a href="#feature3">Tracking</a>
                <a href="#feature3">Budget</a>
                <a href="#feature3">Mission</a>
                <a href="#feature9">Communication</a>
                
            </div>
            <div className="nav-links">
                <a href="#login">Login</a>
                <a href="#signup">Sign Up</a>
            </div>
        </nav>
    );
};

export default Navbar;
