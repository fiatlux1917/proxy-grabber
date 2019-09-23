import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAIL,
  SET_INITIAL_STATE,
} from '@/constants/grabber'

const initialState = {
  proxies: [],
  fetching: false,
  error: '',
}

export const grabber = (state = initialState, action) => {
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
        proxies: state.proxies.concat(action.proxies),
        fetching: false,
        error: '',
      }

    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload.message,
        fetching: false,
      }

    case SET_INITIAL_STATE:
      return initialState

    default:
      return state
  }
}