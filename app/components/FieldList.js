import React, { Component, PropTypes } from 'react';
import RecipeField from './RecipeField';



let FieldList = ({ fields, onChange }) => {
  return (
    fields.map((field) => {
      <RecipeField onChange={(e) => {onFieldChange(field.id, e.target.value)}} data-id={field.id} value={field.text} />
    })
  )
}

export default FieldList;