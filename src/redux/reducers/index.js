import { combineReducers } from 'redux'
import general from './general'
import todos from './todos'

export default combineReducers({
  general,
  todos,
})
