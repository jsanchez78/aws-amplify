import React from 'react';
import logo from './logo.svg';
import twitter from './icons/twitter.svg';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import './App.css';

import Image from "./images/Rooftop.JPG";
import User from "./images/user.jpg";
import Heart from "./images/heart-solid.svg";
import Share from "./images/share-solid.svg";
import Retweet from "./images/retweet-solid.svg";
import "./Sass/app.scss";

const SocialCard = () => (
  <div className="social_card">
    <img src={Image} alt="Sample image" />
    <div className="social_card_body">
      <div>
        <p>
          @some_lego_guy
          <br />
          <span>Mar 14</span>
        </p>
        <img src={User} alt="@some_lego_guy" />
      </div>
      <p>Here is a custom status with some text and stuff...</p>
      <div className="social_interactions">
        <p>
          <img src={Share} alt="Shares" /> 492
        </p>
        <p>
          <img src={Retweet} alt="Retweets" /> 3,843
        </p>
        <p>
          <img src={Heart} alt="Likes" /> 1,336
        </p>
      </div>
    </div>
  </div>
);



function App() {
  return (
    
    <div className="App">
      
      <div>
      <SocialCard />
    </div>
      <div className="icons">
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
    </div>
  );
}
/*
const App = () => (
  <div>
    <SocialCard />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

*/
export default App;
