import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer, AppState } from './rootReducer'
import thunkMiddleware from 'redux-thunk'

const configureStore = (initialState: AppState | {}) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export { configureStore }
