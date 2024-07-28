import React from 'react';
import '../Asset/CSSfiles/Footer.css';
import Logo from '../Asset/images/dumbbell.png'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h5 className="footer-heading">About FitBee</h5>
          <p className="footer-text">
            FitBee is a revolutionary platform designed exclusively for those seeking fun-loving workouts.</p>
            <p>Our platform is a haven for fitness enthusiasts who believe exercising should be enjoyable.
          </p>
          <br/>
          <h5 className="footer-contact">Email :  support@fitbee.in</h5>
          <h5 className="footer-contact">Phone :   < span className="footer-phone">877 892 5410</span></h5>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo-container">
        <img className="footer-logo" src={Logo} alt="Logo" /> 
          <div className="footer-company-info">
            <h2 className="footer-company-name">FitBee Technologies Pvt. Ltd.</h2>
            
            <h5 className="footer-copyright">© Copyright 2024. All Rights Reserved.</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
