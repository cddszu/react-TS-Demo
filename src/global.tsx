export {}

declare global {
  interface Window {
    __INITIAL_STATE__:any,
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
  }

  interface NodeModule {
    hot :any
  }
}
