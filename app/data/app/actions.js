import createAction from 'common/actionCreator'
import { FETCH_REPOS, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAIL } from './constants'

export const fetchRepos = () => createAction(FETCH_REPOS)

export const fetchReposSuccess = events =>
  createAction(FETCH_REPOS_SUCCESS, events)

export const fetchReposFail = error => createAction(FETCH_REPOS_FAIL, error)
