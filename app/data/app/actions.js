import { INITIALIZE } from './constants'
import createAction from 'common/actionCreator'

export const initialize = () => createAction(INITIALIZE)
