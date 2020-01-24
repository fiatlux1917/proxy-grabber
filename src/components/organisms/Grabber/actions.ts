import { SimpleAction } from '../../../types/actions';
import { grabProxiesApi } from '../../../api';
import { Dispatch } from 'redux';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const SET_PROTOCOL = 'SET_PROTOCOL';
export const CLEAR_LOG = 'CLEAR_LOG';

export const grabProxies = (protocol: string): any => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchRequest());
    try {
      const [, json] = await grabProxiesApi(protocol);
      const proxies = json[protocol].join('\n');
      dispatch(fetchSuccess(proxies));
    } catch (error) {
      dispatch(fetchFail(error));
    }
  };
};

const fetchRequest = (): SimpleAction => {
  return {
    type: FETCH_REQUEST,
  };
};

const fetchSuccess = (proxies: string): SimpleAction => {
  return {
    type: FETCH_SUCCESS,
    payload: proxies,
  };
};

const fetchFail = (e: string): SimpleAction => {
  return {
    type: FETCH_FAIL,
    payload: new Error(e),
  };
};

export const setProtocol = (protocol: string): SimpleAction => {
  return {
    type: SET_PROTOCOL,
    payload: protocol,
  };
};

export const clearLog = (): SimpleAction => {
  return {
    type: CLEAR_LOG,
  };
};
