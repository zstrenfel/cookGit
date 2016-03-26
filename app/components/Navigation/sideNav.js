import React from 'react'
import RecipeListContainer from '../../containers/RecipeListContainer'

const SideNav = () => {
    return (
      <div className='side-nav'>
            <h1>Recipes</h1>
            <RecipeListContainer />
      </div>
    )
}

export default SideNav;