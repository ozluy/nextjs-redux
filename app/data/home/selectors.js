import { createSelector } from 'reselect'
import { sortBy, prop, reverse, compose } from 'ramda/'

const base = state => state.get('home')

export const selectRepos = createSelector(base, state => state.repos)

export const selectOrderedRepos = createSelector(selectRepos, repos => {
  if (repos) {
    return compose(reverse(), sortBy(prop('created_at')))(repos)
  }
  return repos
})

export const selectReposLoading = createSelector(base, state => state.loading)

export const selectReposError = createSelector(base, state => state.error)
