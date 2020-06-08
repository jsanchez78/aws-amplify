import React from 'react';
import './App.css';

import Image from "./images/Rooftop.JPG";
import User from "./images/user.jpg";
import Heart from "./images/heart-solid.svg";
import Share from "./images/share-solid.svg";
import Retweet from "./images/retweet-solid.svg";
import "./Sass/app.scss";


import Welcome from './icons.js';

import Nav from './navbar.js';

import InfiniteScroll from 'react-infinite-scroll-component';

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
     
    <Nav/>
    <SocialCard/>
    <Welcome/>
     
    </div>
    
  );
}

export default App;
