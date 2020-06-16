import React from 'react'
import Typist from 'react-typist'
import './ProjectsPage.css'

import magic from "../res/News.gif"
import github from "../res/GithubInput.png"
import travel from "../res/ChicagoTravelGuide15.gif"
import led from "../res/LEDBeats.png"

  const ProjectsPage = () => {
      return (
          <section className="ProjectsPage">
          <h1 id="ProjectsPage">
              <h3 className="Heading">
                <Typist>
                  <Typist.Delay ms={1000} />
                  <span id="nav_nums"> 02. </span> 
                  Projects
                  <Typist.Backspace count={8} delay={200} />
                  <span> Projects </span>
                </Typist>
              </h3>
          </h1>

    <div className="work">
      <div id="inner">
      <div className = "row">
          <div className = "content">
            <a href="https://github.com/jsanchez78/MagicPaper">
              <img src={magic}  alt="MagicPaper"/>
            </a>
              <p className="description">
                <b>MagicPaper </b>
                Inspired by the wizardly world of Harry Potter, this iOS app displays an interactive Newspaper when hovered above images.
              </p>
          </div>
      

          <div className = "content">
              <a href="https://github.com/jsanchez78/GraphQLClientFrameworkGithub">
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
                  <a href="https://github.com/jsanchez78/ChicagoTravelGuide">
                    <img src={travel} alt="Chicago Travel Guide"/>
                  </a>
                  <p className="description">
                    <b>Travel Guide </b>
                    Android app to navigate tasty places to eat while avoiding the Ronaaaa!
                  </p>
              </div>
              <div className = "content">
                <a href="https://github.com/jsanchez78?tab=repositories">
                  <img src={led} alt="LED Flow"/>
                </a>
                <p className="description">
                  <b>LED Flow </b>
                  LED music synchronization project with party mode for some sick beats
                </p>
              </div>  
        </div>

      </div>
    </div>
  </section>
      );
}
export default ProjectsPage