export const grabProxies = (type, onSuccess, onFailure) => {
  fetch(`${process.env.REACT_APP_URL}${type}`, {
    method: 'GET',
    mode: 'cors',
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
