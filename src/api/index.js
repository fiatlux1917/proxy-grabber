export const grabProxiesFromApi = protocol => {
  return fetch(`${process.env.REACT_APP_URL}${protocol}`, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then(response => Promise.all([response, response.json()]))
}
