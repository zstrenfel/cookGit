import React from 'react'
import { connect } from 'react-redux'
import { titleChange } from '../../actions/RecipeActions'
import RecipeInput from '../../components/Recipe/RecipeInput'
import RecipeTextArea from '../../components/Recipe/RecipeTextArea'

// import FormTitle from '../components/Recipe/FormTitle'

const mapStateToProps = (state) => {
  return {
    title: state.title
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
      <label htmlFor={'title'} > Title </label>
      <RecipeInput onChange={ (e) => onTitleChange('title', e.target.value) } value={ title.title } label={"title"} />
      <label htmlFor={'title'} > Description </label>
      <RecipeTextArea onChange={ (e) => onTitleChange('description', e.target.value) } value={ title.description } label={"description"} />
    </div>
  )
}

TitleContainer = connect(mapStateToProps, mapDispatchToProps)(TitleContainer);

export default TitleContainer