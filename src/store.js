import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import sagas from './sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]
const initialState = {}
const enhancers = composeEnhancers(applyMiddleware(...middlewares))

const store = createStore(rootReducer, initialState, enhancers)

sagaMiddleware.run(sagas)

export default store
