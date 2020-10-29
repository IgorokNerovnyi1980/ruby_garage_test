import Type from '../types'

const initialState = {
  tasks: [
    { body: 'first todo 2', id: '21', relation: '2' },
    { body: 'second todo 2', id: '22', relation: '2' },
    { body: 'first todo', id: '11', relation: '1' },
    { body: 'second todo', id: '12', relation: '1' },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state
  }
}
