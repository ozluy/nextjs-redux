import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import { initialize } from 'data/app/actions'

const initialState = {}
const store = configureStore(initialState)
store.dispatch(initialize())
const withStore = Component => () => (
  <Provider store={store}>
    <Component {...this.props} />
  </Provider>
)

export default withStore
