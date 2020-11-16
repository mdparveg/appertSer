import React from "react";
import './Footer.css'
import location from "../../../Resource/location.png";
import facebook from "../../../Resource/facebook.jpg";
import instragram from "../../../Resource/instagram.jpg";
import youtube from "../../../Resource/youtube.jpg";
import linkedin from "../../../Resource/linkedin.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 pt-3 d-flex align-items-start justify-content-start">
              <img src={location} alt="" />
              <div className="address pl-2">
                <p>H#340 (4th Floor), Road #24,</p>
                <p>New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                <p>Phone: 018XXXXXXXX</p>
                <p>E-mail: info@company.com</p>
              </div>
            </div>
            <div className="col-md-2">
              <h4>Company</h4>
              <p>about</p>
              <p>site map</p>
              <p>Support Center</p>
              <p>Terms Conditions</p>
              <p>Submit Listing</p>
            </div>
            <div className="col-md-2">
              <h4>Quick Links</h4>
              <p>Quick Links</p>
              <p>Rentals</p>
              <p>Sales</p>
              <p>Contact</p>
              <p>Terms Conditions</p>
              <p>Our blog</p>
            </div>
            <div className="col-md-4">
              <h4>About</h4>
              <p>
                We are the top real estate <br />
                agency in Sydney, with agents <br />
                available to answer any <br />
                question 24/7.
              </p>
              <div className="socialIcon">
                <img src={facebook} className="img-fluid" alt="" />
                <img src={instragram} className="img-fluid" alt="" />
                <img src={youtube} className="img-fluid" alt="" />
                <img src={linkedin} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;