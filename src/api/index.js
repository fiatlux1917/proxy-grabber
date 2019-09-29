import { getRequestString } from '@/utils/api'

export const grabProxiesApi = protocol => {
  const requestString = getRequestString(protocol)
  return fetch(`${process.env.REACT_APP_URL}${requestString}`, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then(response => Promise.all([response, response.json()]))
}
