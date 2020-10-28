import { combineReducers } from 'redux'
import general from './general'
import todos from './todos'
import tasks from './tasks'

export default combineReducers({
  general,
  todos,
  tasks,
})
