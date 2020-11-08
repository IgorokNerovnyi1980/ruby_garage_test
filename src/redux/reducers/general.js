import Type from '../types'

const initialState = {
  theme: 'base',
  isCreator: false,
  isCalendar: false,
  flag: null,
  taskId: null,
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
    case Type.OPEN_CALENDAR:
      return {
        ...state,
        isCalendar: true,
      }
    case Type.CLOSE_CALENDAR:
      return {
        ...state,
        isCalendar: false,
      }
    case Type.SET_TASK_ID:
      return {
        ...state,
        taskId: action.payload,
      }

    default:
      return state
  }
}
