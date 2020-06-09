import React from 'react'
import Typist from 'react-typist'
import './AboutPage.css'


const AboutPage = () => {
    return (
        <div id="AboutPage" className="AboutPage">
        <h1 id="About">
            <Typist>
                <Typist.Delay ms={1000} />
                <span id="nav_nums"> 01. </span> 
                About Me
            </Typist>
                
         </h1>
         <h3>
             Hello! I'm Jacob, a software engineer based in Chicago, IL. 
             <Typist>
                <Typist.Delay ms={1000} />
                <span id="nav_nums"> => I build things for the web. </span> 
            </Typist>
             
        </h3> 
        </div>
         )
}
export default AboutPage