import { combineReducers } from 'redux'
import meals from './meals'
import checker from './checker'

const ourApp = combineReducers({ meals, checker })

export default ourApp