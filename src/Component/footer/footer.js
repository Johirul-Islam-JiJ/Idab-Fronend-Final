import React from "react";
import "./footer.css";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        IDAB
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About IDAB</a>
        </li>
        <li>
          <a href="#about">Members</a>
        </li>
        <li>
          <a href="#experience">Constitution</a>
        </li>
        <li>
          <a href="#services">Events</a>
        </li>
        <li>
          <a href="#portfolio">Notice</a>
        </li>
        <li>
          <a href="#publication">Publication</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com">
          <FiFacebook />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <FiTwitter />
        </a>
      </div>

      <div className='footer_copyright'>
        <span class="credit">Created By <a href="https://engrafzalhossen.com/afzal-swe">IDAB</a> | @ 2022 all right reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
