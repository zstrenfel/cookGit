import React from 'react';
import {Link} from 'react-router'

const TopNav = () => {
      return (
        <div className='top-nav'>
          <ul>
            <li><Link to="/dashboard">Recipes</Link></li>
            <li><Link to="/user/home">Profile</Link></li>
            <li><Link to="/user/settings">Settings</Link></li>
            <li><Link to="/">Logout</Link></li>
          </ul>
        </div>
      )
}

export default TopNav;