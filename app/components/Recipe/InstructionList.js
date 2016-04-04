import React, { Component, PropTypes } from 'react';
import RecipeTextArea from './RecipeTextArea';



let InstructionList = ({ instructions, onInstructionChange }) => {
  return (
    <div className="instructions">
    <label> Instructions </label>
    {
      Object.keys(instructions).map((key) => {
          return (
            <div className='instruction'>
            <div className="instruction-num">
              {key}.
            </div>
            <RecipeTextArea
              onChange={(e) => { onInstructionChange(key, e.target.value)}}
              key={key}
              label={key}
              value={instructions[key]}
            />
          </div>

        )})
    }
    </div>
  )
}

export default InstructionList;