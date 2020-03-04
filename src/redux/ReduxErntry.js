import { combineReducers } from 'redux'

import Error from './reducers/Error'
import UserData from './reducers/UserData'
import Order from './reducers/Order'
import Plan from './reducers/Plan'

const reducers = {
    Error,
    UserData,
    Order,
    Plan
}

const Root = combineReducers(reducers)

export default Root