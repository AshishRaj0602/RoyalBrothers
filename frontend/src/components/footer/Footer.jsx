import React from 'react';
import './footer.css'
import { EmailOutlined } from '@mui/icons-material';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import {FaPhoneAlt,FaTwitter,FaLinkedinIn,FaYoutube} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>ROYAL BROTHERS</h4>
          <div className="contact-row">
              <EmailOutlined />
              <span>contact@example.com</span>
            </div>
            <div className="contact-row">
              <FaPhoneAlt />
              <span>+1 123-456-7890</span>
            </div>
        </div>
        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers We're hiring!</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>POLICIES</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Tariff</li>
            <li>Offers</li>
            <li>Riding Gears</li>
            <li>Own a franchise</li>
            <li>Earn with us</li>
            <li>Indian bike routes</li>
          </ul>
        </div>

      </div>
        <div className="footer-links">
          <div className="footer-follow-us">
          <div>Follow Us</div>
          <div className="follow-us">
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://facebook.com"><FaTwitter/></a>
            <a href="https://facebook.com"><FaLinkedinIn/></a>
            <a href="https://facebook.com"><FaYoutube/></a>
          </div>
          </div>
          <div className="footer-download-app">
          <div>Download Our App</div>
          <div className="download-app">
            <a href="https://apps.apple.com/in/app/royal-brothers-bike-rentals/id1405554590"><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/ios-fcbc0490e08247e61abc51ad438f9c8c4ddad79de1158a06558cf301ef8079eb.webp" alt="" /></a>
            <a href="https://play.google.com/store/apps/details?id=com.royalbrothers&hl=en_IN&pli=1"><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/play_store-b25c1e9f919b2b794263ac0c55102263093528f94667842de227471c46d57a3b.webp" alt="" /></a>
          </div>
          </div>
          </div>
    </footer>
  );
};

export default Footer;
