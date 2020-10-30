import Type from '../types'

const initialState = {
  tasks: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Type.SET_DATA:
      return {
        ...state,
        tasks: action.payload.tasks,
      }
    case Type.CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
    case Type.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }
    case Type.DELETE_TODO_LIST:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.relation !== action.payload),
      }

    case Type.TOGGLE_STATUS_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, isDone: !task.isDone }
          }
          return task
        }),
      }

    default:
      return state
  }
}
