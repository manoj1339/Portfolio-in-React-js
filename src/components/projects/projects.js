import React, {useState} from 'react';
import "./project.css";
import Project from "./project.js";
import "./project.css";
import { animated, useTrail } from 'react-spring';


export default function Projects(props) {

    const [toggle, setToggle] = useState(false);

    const trail = useTrail(7, {
        
    });


    return (
        <section className="projects-section" id="projects-section">
            <div className="container">
                <h1>My Work</h1>
                <button onClick={ () => setToggle(!toggle) }>Click me</button>
                <div className="row">
                { trail.map(props => {
                    console.log(props);
                    return <animated.div className="project-card" style={props}><Project /></animated.div>
                } ) }
                </div>
            </div>
        </section>
    )
}
