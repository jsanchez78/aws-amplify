import React from 'react'
import './App.css'

import Icons from './icons/icons'

import Nav from './Header/Navbar'

/* Routing */
import { Route, Switch , HashRouter} from 'react-router-dom'

// We will create these two pages in a moment
import AboutPage from './Pages/AboutPage'
import ProjectsPage from './Pages/ProjectsPage'

import Typist from 'react-typist'

function App() {

  return (
  <HashRouter>
    <div className="App">
      <section className="Home">
        <h1 className="Intro">
          Hi, my name is 
        </h1>
        <h2 className="Name"> 
          Jacob Luis Sanchez.
        </h2>
        <h3 className="Subtitle">
          <Typist>
              <Typist.Delay ms={1000} />
              <span>
               =>  I'm a software Engineer based in Chicago, IL specializing in building wonderful web and mobile applications.
              </span> 
          </Typist>
        </h3>
      </section>

      <AboutPage/>
      <ProjectsPage/>

     <Switch>
      <Route exact path="/About" component={AboutPage} />
      <Route path="/:Projects" component={ProjectsPage} />
     </Switch>
    <Nav/>
    <Icons/>
  </div>
</HashRouter>

  );
}

export default App;
