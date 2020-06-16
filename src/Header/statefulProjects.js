import React from 'react'
import Typist from 'react-typist'
import { Link, animateScroll as scroll } from "react-scroll";

class statefulProjects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {current: false};

        // This binding is necessary to make `this` work in the callback
        this.currentPage = this.currentPage.bind(this);
      }

    currentPage(){
        this.setState({current: true})
    }

    render () {
        return (
        <Link activeClass="active" to="ProjectsPage"spy={true}smooth={true}offset={-70}duration={500} onClick={this.currentPage}>
            
            if (this.state.current) {
            <Typist>
               <Typist.Delay ms={1000} />
               <span id="nav_nums"> 02. </span>
               <span id="category">Experience</span>
            </Typist> 
            }
            
        </Link>
        );
    }
}

export default statefulProjects