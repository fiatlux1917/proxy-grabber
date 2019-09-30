import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAIL,
  SET_PROTOCOL,
  SET_INITIAL_STATE,
} from '@/constants/grabber'

import { grabProxiesApi } from '@/api'

export const setInitialState = () => {
  return {
    type: SET_INITIAL_STATE,
  }
}

export const setProtocol = protocol => {
  return {
    type: SET_PROTOCOL,
    protocol,
  }
}

const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  }
}

const fetchSuccess = proxies => {
  return {
    type: FETCH_SUCCESS,
    proxies,
  }
}

const fetchFail = e => {
  return {
    type: FETCH_FAIL,
    payload: new Error(e),
  }
}

export const grabProxies = protocol => {
  return dispatch => {
    dispatch(fetchRequest())
    grabProxiesApi(protocol)
      .then(([response, json]) => {
        if (response.ok) {
          dispatch(fetchSuccess(json))
        } else {
          dispatch(fetchFail(response.statusText))
        }
      })
      .catch(e => dispatch(fetchFail(e)))
  }
}
