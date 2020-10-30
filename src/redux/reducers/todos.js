import Type from '../types'

const initialState = {
  todos: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Type.SET_DATA:
      return {
        ...state,
        todos: action.payload.todos,
      }
    case Type.CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case Type.EDIT_TODO_LIST:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload
          }
          return todo
        }),
      }

    case Type.DELETE_TODO_LIST:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }

    default:
      return state
  }
}
