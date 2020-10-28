import Type from '../types'

const initialState = {
  theme: 'base',
  isCreator: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Type.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      }
    case Type.OPEN_CREATOR:
      return {
        ...state,
        isCreator: true,
      }
    case Type.CLOSE_CREATOR:
      return {
        ...state,
        isCreator: false,
      }

    default:
      return state
  }
}
