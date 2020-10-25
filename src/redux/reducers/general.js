import Type from '../types'

const initialState = {
  theme: 'base',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Type.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      }
    default:
      return state
  }
}
