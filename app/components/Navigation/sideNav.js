import React from 'react'
import RecipeList from '../../containers/RecipeListContainer'

const SideNav = () => {
    return (
      <div className='side-nav'>
            <h1>Recipes</h1>
            <RecipeList />
      </div>
    )
}

export default SideNav;