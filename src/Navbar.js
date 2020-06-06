import React from "react";
import "./Navbar.css";
import Logo from "./images/logo.svg";
import pdf from './CSResume.pdf';
const Navbar = ({ sticky }) => {
return (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
      <h1> Stick'Me</h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">About</li>
      <li className="navbar--link-item">Projects</li>
      <a href={pdf} target="_blank">
      <li className="navbar--link-item">Resume</li>
      </a>
    </ul>
  </nav>
)};
export default Navbar;