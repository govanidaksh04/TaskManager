// navb.js
import React from 'react';
import './Navb.css';

import { Link } from 'react-router-dom';

const Navb = () => {
  return (
    <div>
        <ul class="Overall">
          <Link to='/' className='link'><div class="hover"><li class="red-text">todoist</li></div></Link>
          <li class="Right">
            <ul class="Right1">
            <Link to='/features' className='link black'><li class="gray hover">Features</li></Link>
            <Link to='/teams' className='link black'><li class="gray hover">For Teams</li></Link>
            <Link to='/resources' className='link black'><li class="gray hover">Resources</li></Link>
            <Link to='/pricing' className='link black'><li class="gray hover">Pricing</li></Link>
              <li class="element">|</li>
            </ul>
            <ul class="Right2">
              <Link to="/login" className='link black'><li class="gray hover">Log in</li></Link>
              <Link to="/register" className='link'><li class="red hover">Register</li></Link>
            </ul>
          </li>
        </ul>
    </div>
  );
};

export default Navb;