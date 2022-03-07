import {createStore, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

// import everything given by the reducer

import rootReducer from './reducers'
// import {composeWithDevTools} from ' redux-devtools-extension'

const middleWare = [thunk]

const store = createStore(
    rootReducer,
    applyMiddleware(...middleWare)
)

export default store
