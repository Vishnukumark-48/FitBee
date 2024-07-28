import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../Components/Header";
import homeimage from "../Asset/images/homeimage.png";
import "../Asset/CSSfiles/Header.css"; 
import GetStarted from "../Components/GetStarted";
import Routine from '../Components/Routine';
import Plan from '../Components/Plan';
import Footer from '../Components/Footer';
import Testimonials from '../Components/Testimonials';
import Login from '../Components/Login'; 
export default function Home() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <>
                            <div id="home" className="section-container">
                                <div className="image-container">
                                    <img src={homeimage} alt="FitBee Home" />
                                </div>
                                <div className="join-now-button">
                                    <button 
                                        className="button-common"
                                        onClick={() => scrollToSection('getstarted')}>
                                        Get Started!
                                    </button>
                                </div>
                            </div>
                            <div id="getstarted" className="section-container">
                                <GetStarted />
                            </div>
                            <div id="routine" className="section-container">
                                <Routine />               
                            </div>
                            <div id="plans" className="plansection-container">
                                <div className="plan-container">
                                    <Plan />
                                </div>
                            </div>
                            <div>
                                <Testimonials />
                            </div>
                            <div id="about" className="footer-section-container">
                                <Footer />
                            </div>
                        </>
                    } />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}
