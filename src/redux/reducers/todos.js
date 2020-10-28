import Type from '../types'

const initialState = {
  todos: [
    {
      label: 'Test list',
      id: '1',
    },
    {
      label: 'Second list',
      id: '2',
    },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Type.CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    default:
      return state
  }
}
