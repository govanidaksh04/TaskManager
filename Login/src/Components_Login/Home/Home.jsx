// Home.js
import React from 'react';
import Navb from '../Navb/Navb';
import './Home.css'

const Home = () => {
    return(
        <div>
            <Navb/>
            <div class='home_main'>
            <div class='common home_h1 home_overline'>Organize your work</div>
            <div class='common home_h1'>and life, finally.</div>
            </div>
            <div class='common home_p'>Become focused, organized, and calm with Todoist. The world’s #1</div>
            <div class='common home_p'>task manager and to-do list app.</div>
        </div>
    );
}

export default Home;