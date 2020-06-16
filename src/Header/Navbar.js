import React, { Component } from 'react'
import './navbar.css'
import Typist from 'react-typist'
import pdf from '../CSResume.pdf'


import { Link, animateScroll as scroll } from "react-scroll"

const Nav = () => {
        return (
        <div id="navbar">
            <a href={pdf} target="_blank" rel="nofollow noopener noreferrer" id="resume">
                <Typist id="type">
                    <Typist.Delay ms={1000} />
                    <span id="nav_nums"> 04. </span>
                    <span id="category">Resume</span>
                </Typist>
            </a>
        
            <a href="mailto:sanchezjacob244@gmail.com?subject=Top Secret Sauce&body=Cool website bro! 🍆 " rel="nofollow noopener noreferrer">
                <Typist>
                    <Typist.Delay ms={1000} />
                    <span id="nav_nums"> 03. </span>
                    <span id="category">Contact</span>
                </Typist>
            </a>
            
            
            <Link activeClass="active" to="ProjectsPage" spy={true} smooth={true} offset={-70} duration={500}>
                <Typist>
                    <Typist.Delay ms={1000} />
                    <span id="nav_nums"> 02. </span>
                    <span id="category">Experience</span>
                </Typist> 
            </Link>
            

            <Link activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={500}>
                <Typist>
                    <Typist.Delay ms={1000} />
                    <span id="nav_nums"> 01. </span>
                    <span id="category">About</span> 
                </Typist>
            </Link>
            
        </div>
        );
    }

export default Nav