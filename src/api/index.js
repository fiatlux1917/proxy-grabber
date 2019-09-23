export const grabProxiesFromApi = protocol => {
  const protocolString = protocol === 'all' ? '' : `&protocol=${protocol}`
  return fetch(`${process.env.REACT_APP_URL}${protocolString}`, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then(response => Promise.all([response, response.json()]))
}
