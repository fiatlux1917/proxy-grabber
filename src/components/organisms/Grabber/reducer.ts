import { GrabberState } from './types'
import { SimpleAction } from '../../../types/actions'
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL } from './actions'

const initialState: GrabberState = {
  proxiesList: [],
  fetching: false,
  error: '',
}

const grabber = (
  state: GrabberState = initialState,
  action: SimpleAction
): GrabberState => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        fetching: true,
        error: '',
      }

    case FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: '',
      }

    case FETCH_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export { grabber }
