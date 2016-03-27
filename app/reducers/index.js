import { combineReducers } from 'redux'
import recipes from './recipes'
import fields from './fields'

const cookApp = combineReducers({
  recipes,
  fields
})

export default cookApp