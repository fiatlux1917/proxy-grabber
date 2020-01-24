import { combineReducers } from 'redux'
import { grabber } from '../components/organisms/Grabber/reducer'

const rootReducer = combineReducers({
  grabber,
})

export type AppState = ReturnType<typeof rootReducer>

export { rootReducer }
