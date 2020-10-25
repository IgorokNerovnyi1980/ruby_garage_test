// import Type from '../types'

const initialState = {
  todos: [
    {
      label: 'Test list',
      id: '1',
      content: [
        { body: 'first todo', id: '11' },
        { body: 'second todo', id: '22' },
      ],
    },
    {
      label: 'Second list',
      id: '21',
      content: [
        { body: 'first todo', id: '21' },
        { body: 'second todo', id: '22' },
      ],
    },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
