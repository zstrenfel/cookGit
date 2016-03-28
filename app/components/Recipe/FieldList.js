import React, { Component, PropTypes } from 'react';
import RecipeField from './RecipeField';



let FieldList = ({ fields, onFieldChange }) => {
  console.log(fields);
  return (
    <div className="instructions">
    {
      Object.keys(fields).map((key) => {
        console.log(key);
          return <RecipeField onChange={(e) => {
            console.log(e.target.value, key)
            onFieldChange(key, e.target.value)
          }} key={key} id={key} text={fields[key]} />
        })
    }
    </div>
  )
}

export default FieldList;