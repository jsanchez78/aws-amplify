import React from 'react';
import twitter from './icons/twitter.svg';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';


const Welcome = ({element}) => {
    return (
                
    <div className="icons" ref={element}>
        <a href="https://twitter.com/JacobSa50291880">
          <div className="col">
            <img src={twitter} className="Icon-logo" alt="logo"/>
          </div>
        </a>
        <a href="https://github.com/jsanchez78">
          <div className="col">
            <img src={github} className="Icon-logo" alt="logo"/>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/jacob-sanchez-12b751142/">
          <div className="col">
            <img src={linkedin} className="Icon-logo" alt="logo"/>
          </div>
        </a>
        <a href="https://dev.to/jsanchez78">
          <div className="col">
            <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" className="Icon-logo" alt="jsanchez78's DEV Profile" height="72" width="72"/>
          </div>
        </a>
    </div>
               
    )
}

export default Welcome