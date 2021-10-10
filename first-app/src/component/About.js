import React, { Component } from 'react';
import { Route , Link } from "react-router-dom";
import AboutProgrammer from './AboutProgrammer';
import AboutProject from './AboutProject';

class About extends Component {
    
    goHomepage = () => {
        // this.props.history.push("/")
        this.props.history.replace("/")
    }
    
    render() {
        return (
            <div>
                <div>
                    <h1>About</h1>
                    <button onClick={this.goHomepage}>go Homepage</button>                
                    <ul>
                        <li><Link to="/About/Programmers">Programmers</Link></li>
                        <li><Link to="/About/Project">Project</Link></li>
                    </ul>
                </div>
                <div>
                    <Route path="/About/Programmers" component={AboutProgrammer} />
                    <Route path="/About/Project" component={AboutProject} />
                </div>
            </div>

        );
    }
}

export default About;