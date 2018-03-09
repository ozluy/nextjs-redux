import { createSelector } from 'reselect'

const base = state => state.get('app')

export const selectRepos = createSelector(base, state => state.repos)
