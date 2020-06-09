import React from 'react'
import twitter from './twitter.svg'
import github from './github.svg'
import linkedin from './linkedin.svg'
import './icons.css'



const Icons = ({element}) => {
    return (           
    <div className="icons" ref={element}>
      <div className="container">
        <a href="https://twitter.com/JacobSa50291880">
          <div className="col_icons">
            <img src={twitter} className="Icon-logo" alt="logo"/>
          </div>
        </a>
      </div>
      <div className="container">
        <a href="https://github.com/jsanchez78">
          <div className="col_icons">
            <img src={github} className="Icon-logo" alt="logo"/>
          </div>
          <div className="shadow"> </div>
        </a>
      </div>
      <div className="container">
        <a href="https://www.linkedin.com/in/jacob-sanchez-12b751142/">
          <div className="col_icons">
            <img src={linkedin} className="Icon-logo" alt="logo"/>
          </div>
          <div className="shadow"> </div>
        </a>
      </div>
      <div className="container">
        <a href="https://dev.to/jsanchez78">
          <div className="col_icons">
            <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" className="Icon-logo" alt="jsanchez78's DEV Profile" height="72" width="72"/>
          </div>
          <div className="shadow"> </div>
        </a>
      </div>
    </div>
               
    )
}
export default Icons