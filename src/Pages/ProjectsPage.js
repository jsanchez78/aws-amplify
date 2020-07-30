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
        <div id="center">
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
        </div>
        {/* Projects Gallery*/}
      <div className="container">
        <div className="work">
          <a href="https://github.com/jsanchez78/MagicPaper" className="MagicPaper" target="_blank">
            <div id="magic">
                <h3>MagicPaper </h3>
                <ul className="categories">
                  <li>iOS</li>
                  <li>Swift</li>
                  <li>ARKit 3.5</li>
                </ul>
            </div>
          </a>
          <a href="https://github.com/jsanchez78/GraphQLClientFrameworkGithub" target="_blank">
            <div id="github">
                <h3>GraphQL Client Framework </h3>
                <ul className="categories">
                  <li>Scala</li>
                  <li>GraphQL</li>
                  <li>Github API</li>
                </ul>
            </div>
          </a>
          <a href="https://github.com/jsanchez78/ChicagoTravelGuide" target="_blank">
            <div id="travel">
                <h3>Travel Guide </h3>
                  <ul className="categories">
                    <li>Android NDK</li>
                    <li>Java</li>
                    <li>Gradle</li>
                  </ul>
            </div>
          </a>
          <a href="https://github.com/jsanchez78?tab=repositories" target="_blank">
            <div id="led">
                <h3>LED Flow </h3>
                <ul className="categories">
                    <li>Arduino</li>
                    <li>C++</li>
                    <li>Piezoelectric sensor</li>
                  </ul>
            </div> 
           </a>
          <a href="https://github.com/jsanchez78/codeGenerator" target="_blank">
            <div id="codeGenerator">
              <h3>Code Generator </h3>
                <ul className="categories">
                    <li>Java</li>
                    <li>Intelij Platform</li>
                    <li>JavaParser</li>
                </ul>  
            </div>
          </a>
          <a href="https://github.com/jsanchez78/aws-amplify" target="_blank">
            <div id="portfolioWebsite">
              <p id="res">Deployed site</p>
              <h3>Personal Website</h3>
                <ul className="categories">
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Node.js</li>
                </ul>  
            </div>
          </a>  
        </div>
      </div>
    </section>
      );
}
export default ProjectsPage
