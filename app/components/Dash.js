import React from 'react';
import TopNav from './Navigation/topNav'
import SideNav from './Navigation/sideNav'
import AddRecipe from '../containers/AddRecipe'

class Dash extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <TopNav />
        <div className="content">
          {this.props.children}
        </div>
        <SideNav />
      </div>
    );
  }
}

export default Dash;