import { combineReducers } from 'redux'
import recipes from './recipes'
import instructions from './instructions'
import title from './title'
import ingredients from './ingredients'
import units from './units'

const cookApp = combineReducers({
  recipes,
  instructions,
  title,
  ingredients,
  units
})

export default cookApp