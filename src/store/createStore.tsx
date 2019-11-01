import { applyMiddleware, compose, createStore as createReduxStore, Store } from 'redux'
import thunk from 'redux-thunk'
// import { hashHistory } from 'react-router'
import makeRootReducer from './reducers'
// import { updateLocation } from './location'

interface NewStore extends Store {
  asyncReducers :any
}

const createStore = (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers :Array<any>= []
  let composeEnhancers :any = compose

  // 在development模式，使用redux-devtools-extension
  if (process.env.NODE_ENV === 'development') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store :NewStore = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  // store.unsubscribeHistory = hashHistory.listen(updateLocation(store))

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const makeRootReducer = require('./reducers').default
      store.replaceReducer(makeRootReducer(store.asyncReducers))
    })
  }

  return store
}

export default createStore
