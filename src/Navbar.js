import React from 'react';
import './navbar.css';
import Typist from 'react-typist';


const Nav = () => {
    return (
    <div id="navbar">
        <a href="#home">
            <Typist id="type">
                <Typist.Delay ms={1000} />
                <span id="nav_nums"> 04. </span> 
            </Typist>
           Resume
        </a>
        <a href="#projects">
            <Typist>
                <Typist.Delay ms={1000} />
                <span id="nav_nums"> 03. </span> 
            </Typist>
            Contact
        </a>
        <a href="CSResume.pdf" target="_blank" rel="noopener noreferrer">
            <Typist>
                <Typist.Delay ms={1000} />
                <span id="nav_nums"> 02. </span> 
            </Typist>
            Experience
        </a>
        <a href="#contact" download> 
            <Typist>
                <Typist.Delay ms={1000} />
            <span id="nav_nums"> 01. </span> 
            </Typist>
                About
        </a>
  </div>
    )}

    
export default Nav