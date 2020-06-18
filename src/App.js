import React from 'react'
import './App.css'

import Icons from './icons/icons'

import Nav from './Header/Navbar'

// We will create these two pages in a moment
import AboutPage from './Pages/AboutPage'
import ProjectsPage from './Pages/ProjectsPage'

import Typist from 'react-typist'

import float from './res/floating.svg'

import { AnimationWrapper} from 'react-hover-animation'

import { bounce } from 'react-animations';

import styled, { keyframes } from 'styled-components';

import sharableIcon from './res/hashS.png'

const bounceAnimation = keyframes`${bounce}`;
 
const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};
`;


function App() {
  return (
    <div className="App">
      <Link to="sharableImage">
        <img src={sharableIcon}/>
      </Link>
      <section className="Home">
        <article className="visibleTop">
        <div className="inner">
        <h1 className="Intro">
          Hi, my name is 
        </h1>
        <h2 className="Name"> 
          Jacob Luis Sanchez.
        </h2>
        <div className="Subtitle">
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
                <p>I'm a software Engineer based in Chicago, IL specializing</p>
                <p>in building wonderful web and mobile applications.</p>
                </BouncyDiv>
                    </AnimationWrapper>
          </Typist>
        </div>
        </div>
        <img src={float}/>
      </article>
    </section>
      <AboutPage/>
      <ProjectsPage/>
    <Nav/>
    <Icons/>
  </div>
  );
}

export default App;
