import { combineReducers } from 'redux'
import {actionInterface, defaultAction} from '../base'

const SET_COUNT = 'SET_COUNT'

export function setCount(count :number) {
  return (dispatch :Function) => {
    dispatch({
      type: SET_COUNT,
      data: count
    })
  }
}

export const count = (pre :Number = 0, action :actionInterface) => {
  return defaultAction(pre, action, SET_COUNT)
}


export default combineReducers({
  count
})
