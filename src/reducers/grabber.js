import {
  COUNTRIES_LIST,
  COUNT_REQUEST,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAIL,
  SET_COUNTRY,
  SET_PROTOCOL,
  SET_INITIAL_STATE,
  PROTOCOLS,
} from '@/constants/grabber'
import { getUniqueList } from '@/utils/api'

const initialState = {
  country: COUNTRIES_LIST[0],
  error: '',
  fetching: false,
  requestNumber: 1,
  protocol: PROTOCOLS[0],
  proxies: [],
}

export const grabber = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        ...state,
        country: action.country,
      }

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
        proxies:
          state.requestNumber < COUNT_REQUEST
            ? state.proxies.concat(action.proxies)
            : getUniqueList(state.proxies.concat(action.proxies)),
        requestNumber:
          state.requestNumber < COUNT_REQUEST ? ++state.requestNumber : 1,
        fetching: state.requestNumber < COUNT_REQUEST ? true : false,
        error: '',
      }

    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload.message,
        requestNumber:
          state.requestNumber < COUNT_REQUEST ? ++state.requestNumber : 1,
        fetching: state.requestNumber < COUNT_REQUEST ? true : false,
      }

    case SET_INITIAL_STATE:
      return initialState

    default:
      return state
  }
}
