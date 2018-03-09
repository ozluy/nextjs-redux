import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import { fetchRepos } from 'data/app/actions'

const initialState = {}
const store = configureStore(initialState)
store.dispatch(fetchRepos('ozluy'))
const withStore = Component => () => (
  <Provider store={store}>
    <Component {...this.props} />
  </Provider>
)

export default withStore
