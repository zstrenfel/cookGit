import { combineReducers } from 'redux'
import recipes from './recipes'
import instructions from './instructions'
import title from './title'

const cookApp = combineReducers({
  recipes,
  instructions,
  title
})

export default cookApp