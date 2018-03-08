import { assoc, merge } from 'ramda'
import { FETCH_REPOS, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAIL } from './constants'

const initialState = {
  repos: [],
  loading: false,
  error: null,
}

export default function createReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPOS:
      return assoc('loading', true, state)
    case FETCH_REPOS_SUCCESS:
      return merge(state, {
        repos: action.payload,
        loading: false,
        error: null,        
      })
    case FETCH_REPOS_FAIL:
      return merge(state, {
        repos: [],
        loading: false,
        error: action.payload,
      })
    default:
      return state
  }
}
