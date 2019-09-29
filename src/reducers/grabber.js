import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAIL,
  SET_PROTOCOL,
  SET_INITIAL_STATE,
  PROTOCOLS,
} from '@/constants/grabber'

const initialState = {
  proxies: [],
  fetching: false,
  protocol: PROTOCOLS[0],
  error: '',
}

export const grabber = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROTOCOL:
      return {
        ...state,
        protocol: action.protocol,
      }

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
