import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-menu">
        <ul className="menu-list">
          <li className="menu-item">
            <a href="#home">Home</a>
          </li>
          <li className="menu-item">
            <a href="#about">About</a>
          </li>
          <li className="menu-item">
            <a href="#services">Services</a>
          </li>
          <li className="menu-item">
            <a href="#tours">Tours</a>
          </li>
        </ul>
      </div>
      <div className="footer-icon-menu">
        <ul className="icon-list">
          <li className="icon-item">
            <a href="http://facebook.com">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li className="icon-item">
            <a href="http://facebook.com">
              <i className="fa-brands fa-square-twitter"></i>
            </a>
          </li>
          <li className="icon-item">
            <a href="http://facebook.com">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <p>
        Copyright &copy; <span id="date"></span> All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
