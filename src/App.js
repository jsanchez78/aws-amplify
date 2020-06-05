import React from 'react';
import logo from './logo.svg';
import twitter from './icons/twitter.svg';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="icons">
        <div className="col">
          <a href="https://twitter.com/JacobSa50291880">
            <img src={twitter} className="Icon-logo" alt="logo"/>
          </a>
        </div>
        <div className="col">
          <a href="https://github.com/jsanchez78">
            <img src={github} className="Icon-logo" alt="logo"/>
          </a>
        </div>
        <div className="col">
          <a href="https://www.linkedin.com/in/jacob-sanchez-12b751142/">
            <img src={linkedin} className="Icon-logo" alt="logo"/>
          </a>
        </div>
        <div className="col">
          <a href="https://dev.to/jsanchez78">
            <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" className="Icon-logo" alt="jsanchez78's DEV Profile" height="30" width="30"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
