export interface actionInterface {
  type :String,
  data :any
}

export function defaultAction(pre :any, action :actionInterface, actionType :String) {
  if (action.type === actionType) {
    return action.data
  } else {
    return pre
  }
}
