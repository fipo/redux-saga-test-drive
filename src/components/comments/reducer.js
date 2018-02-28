import * as CONSTANTS from './constants'

export default function comments(state = [], action) {
  switch (action.type) {
    case CONSTANTS.GET_COMMENTS_SUCCESS:
      return [...state, ...action.payload]
    default:
      return state
  }
}
