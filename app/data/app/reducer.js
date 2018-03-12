import { INITIALIZE } from './constants'
import { assoc } from 'ramda'

const initialState = {
  initialized: false,
}

export default function createReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return assoc('initialized', true, state)
    default:
      return state
  }
}
