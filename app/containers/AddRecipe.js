import React from 'react'
import { addRecipe } from '../actions'
import { connect } from 'react-redux'

let AddRecipe = ({ dispatch }) => {
  let title, body;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        //if no title don't save
        if (!title.value.trim()) {
          return;
        }
        //dispatch the recipe with the correct action
        dispatch(addRecipe(title.value, body.value));
        title.value = '';
        body.value = '';
      }}
      >
        <input ref={node => {title = node}} />
        <input ref = {node => {body = node}} />
        <button type='submit'> Create Recipe </button>
      </form>
    </div>
  )
}

AddRecipe = connect()(AddRecipe);

export default AddRecipe;