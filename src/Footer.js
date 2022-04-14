import React from "react";
import Navbar from "./Navbar";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <Navbar />
      <div className="social">
        <div className="social-icons">
          <div className="icon">
            <FaFacebookSquare />
            <div className="small-line"></div>
          </div>

          <div className="icon">
            <FaTwitter />
            <div className="small-line"></div>
          </div>

          <div className="icon">
            <FaPinterest />
            <div className="small-line"></div>
          </div>

          <div className="icon">
            <FaInstagram />
            <div className="small-line"></div>
          </div>
        </div>
        <div className="footer-tag">
          &copy; 2021 LoopsStudios. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
