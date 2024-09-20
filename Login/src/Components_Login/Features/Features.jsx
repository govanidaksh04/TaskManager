import React from 'react';
import Navb from '../Navb/Navb';
import './Features.css';

const Features = () => {
    return(
        <div>
            <Navb/>
            <div class='main'>
                <div class='overline'>Overwhelmed</div>
                <div >On top of it</div>
            </div>
            <p>Todoist makes it frictionless to get all your tasks out of your head</p>
            <p>and organized in one trusted place.</p>
        </div>
    );
}

export default Features;