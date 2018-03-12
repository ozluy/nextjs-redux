/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux-immutable'
import app from 'data/app/reducer'

/**
 * Creates the main reducer with the dynamically injected ones
 */

const createReducer = injectedReducers =>
  combineReducers({
    app,
    ...injectedReducers,
  })

export default createReducer
