import Type from '../types'

const initialState = {
  tasks: [
    { body: 'first todo 2', id: '21', relation: '2' },
    { body: 'second todo 2', id: '22', relation: '2' },
    { body: 'first todo', id: '11', relation: '1' },
    { body: 'second todo', id: '22', relation: '1' },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Type.CREATE_TASK:
      return {
        ...state,
        tasks: [...state.todos, action.payload],
      }
    default:
      return state
  }
}
