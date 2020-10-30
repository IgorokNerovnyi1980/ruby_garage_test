import Type from '../types'

const initialState = {
  theme: 'base',
  isCreator: false,
  currentRow: null,
  flag: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Type.UPDATE_LOCALSTORAGE:
      return {
        ...state,
        flag: state.flag + 1,
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
    case Type.SET_ACTIVE_TASK:
      return {
        ...state,
        currentRow: action.payload,
      }

    default:
      return state
  }
}
