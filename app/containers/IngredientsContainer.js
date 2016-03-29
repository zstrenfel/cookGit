import React from 'react'
import { connect } from 'react-redux'
// import { titleChange } from '../actions/RecipeActions'
// import RecipeInput from '../components/Recipe/RecipeInput'
// import RecipeTextArea from '../components/Recipe/RecipeTextArea'

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleChange: (label, text) => {
      dispatch( titleChange(label, text) )
    }
  }
}

let TitleContainer = ({ title, onTitleChange }) => {
  return (
    <div className="recipe-title">
      <RecipeInput onChange={ onTitleChange } value={ title.title} data-label={"title"} />
      <RecipeTextArea onChange={ onTitleChange } value={ title.description } data-label={"description"} />
    </div>
  )
}

TitleContainer = connect(mapStateToProps, mapDispatchToProps)(TitleContainer);

export default TitleContainer