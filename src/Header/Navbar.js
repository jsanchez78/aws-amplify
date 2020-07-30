import React, { Component } from 'react'
import './navbar.css'
import Typist from 'react-typist'
import PdfFile from '../CSResume.pdf'


import { Document, Page } from 'react-pdf';

import { Link, animateScroll as scroll } from "react-scroll"

import { AnimationWrapper} from 'react-hover-animation'

import { bounce } from 'react-animations';

import styled, { keyframes } from 'styled-components';

import MemoryIcon from '@material-ui/icons/Memory';

import { makeStyles } from '@material-ui/core/styles';

import PDFViewer from 'pdf-viewer-reactjs'

const bounceAnimation = keyframes`${bounce}`;
 
const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};
`;

const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 1,
        color: '#82b1ff',
        width: 70,
        height: 70,
        padding: '0 0px',
      },

  });

const Nav = () => {
        const classes = useStyles();

        return (
        <div id="navbar">
        
            <div className="logo">
                <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-70} duration={500}>
                    <MemoryIcon  className={classes.root}/>
                </Link>
            </div>
        
            <a href={PdfFile} target="_blank" rel="nofollow noopener noreferrer">
                <Typist id="type">
                    <Typist.Delay ms={1000} />
                    <AnimationWrapper config={{
                            color: {
                                initial: 'white',
                                onHover: '#82b1ff',
                            },
                            opacity: {
                                initial: 1,
                                onHover: 1,
                            },
                        }}>
                    
                    <BouncyDiv>
                    
                    <span id="nav_nums"> 04. </span>
                    <span id="category">Resume</span>
                
                    </BouncyDiv>
                    
                    </AnimationWrapper>

                </Typist>
            </a>
                        
            <a href="mailto:sanchezjacob244@gmail.com?subject=Top Secret Sauce&body=Cool website bro! 🍆 " rel="nofollow noopener noreferrer">
                <Typist>
                    <Typist.Delay ms={1000} />
                    <AnimationWrapper config={{
                            color: {
                                initial: 'white',
                                onHover: '#82b1ff',
                            },
                            opacity: {
                                initial: 1,
                                onHover: 1,
                            },
                        }}>
                    <BouncyDiv>
                    <span id="nav_nums"> 03. </span>
                    <span id="category">Contact</span>
                    </BouncyDiv>
                    </AnimationWrapper>
                </Typist>
            </a>
            <Link activeClass="active" to="ProjectsPage" spy={true} smooth={true} offset={-70} duration={500}>
                <Typist>
                    <Typist.Delay ms={1000} />
                    <AnimationWrapper config={{
                            color: {
                            initial: 'white',
                            onHover: '#82b1ff',
                            },
                            opacity: {
                                initial: 1,
                                onHover: 1,
                            },
                        }}>
                    <BouncyDiv>
                    <span id="nav_nums"> 02. </span>
                    <span id="category">Projects</span>
                    </BouncyDiv>
                    </AnimationWrapper>
                </Typist> 
            </Link>
            <Link activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={500} className="about">
                    <Typist>
                        <Typist.Delay ms={1000} />
                        <AnimationWrapper config={{
                            color: {
                                initial: 'white',
                                onHover: '#82b1ff',
                            },
                            opacity: {
                                initial: 1,
                                onHover: 1,
                            },
                        }}>
                        <BouncyDiv>
                        <span id="nav_nums"> 01. </span>
                        <span id="category">About</span> 
                        </BouncyDiv>
                        </AnimationWrapper>
                    </Typist>
                
            </Link>   
        </div>
        );
    }
export default Nav