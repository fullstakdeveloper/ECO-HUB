// image.js
import "./image.css";

import React from 'react';

function Image(props) 
{
    return (
        <div className = "state">
            
            <h1>Event</h1>
            <img src = {props.m}></img>
            <div id = "prog"></div>

            

        </div>
    );
}

export default Image;
