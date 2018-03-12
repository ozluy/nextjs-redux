import createAction from 'common/actionCreator'
import { FETCH_REPOS, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAIL } from './constants'

export const fetchRepos = username => createAction(FETCH_REPOS, username)

export const fetchReposSuccess = events =>
  createAction(FETCH_REPOS_SUCCESS, events)

export const fetchReposFail = error => createAction(FETCH_REPOS_FAIL, error)
