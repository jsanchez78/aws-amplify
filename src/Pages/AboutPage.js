import React, { Component } from 'react'
import Typist from 'react-typist'
import './AboutPage.css'

import SocialCard from './SocialCard'

import { bounce } from 'react-animations';

import styled, { keyframes } from 'styled-components'

const bounceAnimation = keyframes`${bounce}`;
 
const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};
`;


const AboutPage = () => {
        
        return (
        <section className="About">
            <div id="center">
                <h1 id="About">
                    <h3 className="Heading">
                    <Typist>
                        <Typist.Delay ms={1000} />
                        <span id="nav_nums"> 01. </span> 
                        About Me
                        <Typist.Backspace count={8} delay={200} />
                        <span> About Me </span>
                    </Typist>
                    </h3>
                 </h1>
            </div>
                 <div className="about_container">
                    <div className="content">
                        <div className ="content_description">
                            <div>
                                <p>
                                    Hello! I'm Jacob, a software engineer based in Chicago, IL. 
                                </p>
                                <p>
                                I enjoy creating agile software at the intersection of system performance, software design, and native apps.
                                </p>
                                <p>
                                Current Senior graduating from University of Illinois at Chicago Fall 2020.
                                I'm pursuing a B.S. in computer Science and will be pursuing software engineering positions.
                                </p>
                                <p>
                                Here are a few technologies I've been working with recently:
                                </p>
                            </div>
                            <ul className="Technologies">
                                <li className="list_item_js">
                                    Javascript (ES6+)
                                </li>
                                <li className="list_item_java">
                                    Java
                                </li>
                                <li className="list_item_nodejs">
                                    Node.js
                                </li>
                                <li className="list_item_scala">
                                    Scala
                                </li>
                                <li className="list_item_react">
                                    React
                                </li>
                                <li className="list_item_graphql">
                                    GraphQL
                                </li>
                            </ul>
                        </div>
                    </div>
                        <a className="gitHub">
                            <SocialCard/>
                        </a>
                </div>
        </section> 
        
                 );
    
}
export default AboutPage