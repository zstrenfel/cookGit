import React from 'react';
import TopNav from './Navigation/topNav'
import SideNav from './Navigation/sideNav'
import AddRecipe from '../containers/AddRecipe'

class Dash extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <TopNav />
        <SideNav />
        <div className="content">
          <AddRecipe />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Dash;