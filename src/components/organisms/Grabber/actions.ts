import { SimpleAction } from '../../../types/actions'

export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

const fetchRequest = (): SimpleAction => {
  return {
    type: FETCH_REQUEST,
  }
}

const fetchSuccess = (proxies: string[]): SimpleAction => {
  return {
    type: FETCH_SUCCESS,
    payload: proxies,
  }
}

const fetchFail = (e: string): SimpleAction => {
  return {
    type: FETCH_FAIL,
    payload: new Error(e),
  }
}
