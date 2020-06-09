import React from 'react';
import './navbar.css';
import Typist from 'react-typist';
import pdf from './CSResume.pdf';

/* Routing */
import { Route, Switch , NavLink, HashRouter} from 'react-router-dom'

const Nav = () => {
    return (
    <div id="navbar">
        <a href={pdf} target="_blank" rel="nofollow noopener noreferrer" id="resume">
            <Typist id="type">
                <Typist.Delay ms={1000} />
                <span id="nav_nums"> 04. </span> 
            </Typist>
            Resume
        </a>
        <a href="#Contact" rel="nofollow noopener noreferrer">
            <Typist>
                <Typist.Delay ms={1000} />
                <span id="nav_nums"> 03. </span> 
            </Typist>
            Contact
        </a>
        <a href="#Projects"  rel="nofollow noopener noreferrer">
            <Typist>
                <Typist.Delay ms={1000} />
                <span id="nav_nums"> 02. </span> 
            </Typist>
            Experience
        </a>
        <a href="#About" rel="nofollow noopener noreferrer"> 
            <Typist>
                <Typist.Delay ms={1000} />
            <span id="nav_nums"> 01. </span> 
            </Typist>
                About
        </a>
  </div>
    )}

    
export default Nav