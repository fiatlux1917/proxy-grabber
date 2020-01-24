import { SimpleAction } from '../../../types/actions';

export interface GrabberState {
  proxiesList: string;
  protocol: string;
  fetching: boolean;
  error: string;
}

export type SetProtocol = (protocol: string) => SimpleAction;
export type GrabProxies = (protocol: string) => any;
export type ClearLog = () => SimpleAction;
