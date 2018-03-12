import { merge } from 'ramda'
import { FETCH_REPOS, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAIL } from './constants'

const initialState = {
  repos: null,
  loading: false,
  error: null,
}

export default function createReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPOS:
      return merge(state, {
        repos: null,
        loading: true,
        error: null,
      })
    case FETCH_REPOS_SUCCESS:
      return merge(state, {
        repos: action.payload,
        loading: false,
        error: null,
      })
    case FETCH_REPOS_FAIL:
      return merge(state, {
        repos: null,
        loading: false,
        error: action.payload,
      })
    default:
      return state
  }
}
