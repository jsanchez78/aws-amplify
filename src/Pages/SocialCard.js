import React from 'react'

/*  SVG Icons */
import Image from "../images/google.jpg"
import User from "../images/user.jpg"
import Heart from "../images/heart-solid.svg"
import Share from "../images/share-solid.svg"
import Retweet from "../images/retweet-solid.svg"
import "../Sass/app.scss"

const getDate = () => {
  return new Date().getDate().toLocaleString()
}

const getMonth = () => {

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ]

  const d = new Date()

  return monthNames[d.getMonth()].toLocaleString()

}

const toggleClass = () => {
  const oldClassName = document.getElementsByClassName('heart').className;
  const newClassName = oldClassName === 'animate' 
  document.getElementsByClassName('heart').className = newClassName
}

const SocialCard = () => (
    
    <div className="social_card">
      <img src={Image} alt="Sample image" />
      <div className="social_card_body">
        <div>
          <p>
            @some_lego_guy
            <br />
            <span> {getMonth() + ' ' + getDate()}</span>
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
            <img src={Heart} alt="Likes" className="heart" onClick={toggleClass()}/> 1,336
          </p>
        </div>
    
      </div>
    </div>
    
  );
  
  export default SocialCard