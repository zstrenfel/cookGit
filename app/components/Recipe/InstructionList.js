import React, { Component, PropTypes } from 'react';
import RecipeTextArea from './RecipeTextArea';



let InstructionList = ({ instructions, onInstructionChange }) => {
  return (
    <div className="instructions">
    {
      Object.keys(instructions).map((key) => {
        console.log(key);
          return <RecipeTextArea onChange={(e) => {
            onInstructionChange(key, e.target.value)
          }} key={key} label={key} value={instructions[key]} />
        })
    }
    </div>
  )
}

export default InstructionList;