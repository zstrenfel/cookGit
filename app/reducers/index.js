import { combineReducers } from 'redux'
import recipes from './recipes'

const cookApp = combineReducers({
  recipes
})

export default cookApp