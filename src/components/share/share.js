import React, { Component } from 'react';
import { animated, useSpring } from "react-spring";
import "./share.css";

function Share()
{

    const shareButton = useSpring({
        left: '25px',
        from: {
            left: '-75px'
        },
        config : {
            tension: 250,
            friction: 10,
        },
        delay: 2000
    });

    return (
        <div className="share-buttons">
            <animated.ul style={shareButton}>
                <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i></a></li>
            </animated.ul>
        </div>
    )
}

export default Share;
