import { GrabberState } from './types';
import { SimpleAction } from '../../../types/actions';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAIL,
  SET_PROTOCOL,
  CLEAR_LOG,
} from './actions';

const initialState: GrabberState = {
  proxiesList: '',
  protocol: 'socks',
  fetching: false,
  error: '',
};

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
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        proxiesList: action.payload,
        fetching: false,
        error: '',
      };

    case FETCH_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    case SET_PROTOCOL:
      return {
        ...state,
        protocol: action.payload,
      };

    case CLEAR_LOG:
      return {
        ...state,
        proxiesList: '',
      };

    default:
      return state;
  }
};

export { grabber };
