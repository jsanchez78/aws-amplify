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

import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const bounceAnimation = keyframes`${bounce}`;
 
const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};
`;



function App() {

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  return (
    <div className="App">
      
      <section className="Home" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.div class="Home" style={{ transform: props.xy.interpolate(trans1) }} />
        <animated.div class="inner" style={{ transform: props.xy.interpolate(trans2) }} />
        <article className="visibleTop">
          <div className="inner">
            <h1 className="Intro">
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
          Hi, my name is
          </BouncyDiv>
          </AnimationWrapper> 
        </h1>
        <h2 className="Name">
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
          Jacob Luis Sanchez.
          </BouncyDiv>
          </AnimationWrapper>
        </h2>
        <div className="Subtitle">
          <Typist>
              <Typist.Delay ms={5} />
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
