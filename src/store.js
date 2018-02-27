import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = []
const initialState = {}
const enhancers = composeEnhancers(applyMiddleware(...middlewares))

const store = createStore(rootReducer, initialState, enhancers)

export default store
