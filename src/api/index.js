const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'

export const grabProxies = (type, onSuccess, onFailure) => {
  fetch(`${PROXY_URL}${process.env.REACT_APP_URL}${type}`, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.status)
      }
    })
    .then(data => onSuccess(data))
    .catch(error => {
      onFailure()
    })
}
