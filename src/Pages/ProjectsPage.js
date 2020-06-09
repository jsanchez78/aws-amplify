import React from 'react'
import Typist from 'react-typist'
import './ProjectsPage.css'

import magic from "../res/News.gif"
import github from "../res/githubAPI15.gif"
import travel from "../res/ChicagoTravelGuide15.gif"
import led from "../res/LEDBeats.png"

const ProjectsPage = () => {
    return (
        <div id="ProjectsPage" className="ProjectsPage">
        <h1 id="Projects">
            <Typist>
                <Typist.Delay ms={1000} />
                <span id="nav_nums"> 02. </span> 
                Projects
            </Typist>
         </h1>
  
  <div className = "row">
    
      <div className = "content">
        <a>
          <img src={magic}  alt="MagicPaper"/>
        </a>
          <p className="description">
            <b>MagicPaper </b>
            Inspired by the wizardly world of Harry Potter, this iOS app displays an interactive Newspaper when hovered above images.
          </p>
      </div>
    
      <div className = "content">
          <a>
            <img src={github} alt="Github"/>
          </a>
          <p className="description">
            <b>GraphQL Client Framework </b>
            This project is a pure functional object-oriented design framework for composing and executing external GraphQL commands from Scala client programs.
          </p>
      </div>
        
  </div>
  <div className = "row">

          <div className = "content">
              <a>
                <img src={travel} alt="Chicago Travel Guide"/>
              </a>
              <p className="description">
                <b>Travel Guide </b>
                Android app to navigate tasty places to eat while avoiding the Ronaaaa!
              </p>
          </div>
        
          <div className = "content">
            <a>
              <img src={led} alt="Chicago Travel Guide"/>
            </a>
            <p className="description">
              <b>LED Flow </b>
              LED music synchronization project with party mode for some sick beats
            </p>
          </div>  
  </div>

</div>

    ) 
}
export default ProjectsPage