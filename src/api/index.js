import { getRequestCountry, getRequestProtocol } from '@/utils/api'

export const grabProxiesApi = (_protocol, _country) => {
  const protocol = getRequestProtocol(_protocol)
  const country = getRequestCountry(_country)
  return fetch(`${process.env.REACT_APP_URL}${protocol}${country}`, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then(response => Promise.all([response, response.json()]))
}
