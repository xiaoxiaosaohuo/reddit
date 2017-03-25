import { createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import '../config/ReactotronConfig'
import thunk from 'redux-thunk'

import logger from 'redux-logger'
import { reducer } from '../redux'

const middleware = [ thunk ]
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
  require('../config/ReactotronConfig')
}

export default (initialState) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware),
    // autoRehydrate()
  )
  // persistStore(store)
  return store
}
