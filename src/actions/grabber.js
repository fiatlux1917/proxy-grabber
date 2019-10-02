import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAIL,
  SET_COUNTRY,
  SET_PROTOCOL,
  SET_INITIAL_STATE,
} from '@/constants/grabber'

import { grabProxiesApi } from '@/api'

export const setInitialState = () => {
  return {
    type: SET_INITIAL_STATE,
  }
}

export const setCountry = country => {
  return {
    type: SET_COUNTRY,
    country,
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

export const grabProxies = (protocol, country) => {
  return dispatch => {
    dispatch(fetchRequest())
    grabProxiesApi(protocol, country)
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
