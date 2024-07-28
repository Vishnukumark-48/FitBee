import React from 'react';
import { Link } from 'react-router-dom';
import "../Asset/CSSfiles/Header.css";
import logo from '../Asset/images/dumbbell.png'; 
import profile from '../Asset/images/profile1.png'; 
import Support from '../Asset/images/Support.png'; 

export default function Header() {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="header-container">
            <img className="logo" src={logo} alt="Logo" /> 
            <div className="site-title">FitBee</div>
            <div className="support-button">
                <button className="icon-button" onClick={() => scrollToSection('about')}>
                    <img src={Support} alt="Support" />
                </button>
            </div>
            <Link to="/login">
                <img className="profile" src={profile} alt="Profile" />
            </Link>

            <nav className="nav-links">
                <Link to="/" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>HOME</Link>
                <Link to="/getstarted" onClick={(e) => { e.preventDefault(); scrollToSection('getstarted'); }}>GET STARTED</Link>
                <Link to="/plans" onClick={(e) => { e.preventDefault(); scrollToSection('plans'); }}>PLANS</Link>
                <Link to="/about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>ABOUT</Link>
            </nav>
        </div>
    );
}
