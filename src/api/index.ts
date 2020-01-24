import { FetchHeaders } from './types';

const headersObject: FetchHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const grabProxiesApi = (protocol: string): any => {
  const url = `${process.env.REACT_APP_API_URL}${protocol}`;
  return fetch(url, {
    method: 'GET',
    headers: headersObject,
  }).then(response => Promise.all([response, response.json()]));
};
