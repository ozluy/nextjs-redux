import { createSelector } from 'reselect'

const base = state => state.get('app')

export const selectRepos = createSelector(base, state => state.repos)

export const selectReposLoading = createSelector(base, state => state.loading)

export const selectReposError = createSelector(base, state => state.error)
