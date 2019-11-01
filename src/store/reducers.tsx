import { combineReducers } from 'redux'
import count from './modules/count'


export const injectReducer = (store :any, obj :{ key :any, reducer :any }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, obj.key)) return

  store.asyncReducers[obj.key] = obj.reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export const makeRootReducer = (asyncReducers ?:any) => {
  const appReducer = combineReducers({
    count
  })
  return (state :any, action :any) => {
    return appReducer(state, action)
  }
}

export default makeRootReducer
