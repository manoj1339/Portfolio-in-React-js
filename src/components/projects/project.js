import React from 'react';
import "./project.css";
import project1 from "../../project-1.png";

function Project(){
    return (
        <>
            <img src={project1} alt="Project 1" />
            <h2>Carecarz - Doorstep carwash</h2>
            <p>This is a Doorstep carwash website currently working in Aurangabad.</p>
        </>
    )
}

export default Project;
