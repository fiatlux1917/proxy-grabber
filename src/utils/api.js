export const getRequestProtocol = protocol => {
  switch (protocol) {
    case 'all':
      return process.env.REACT_APP_REQUEST_ALL
    case 'http':
      return process.env.REACT_APP_REQUEST_HTTP
    case 'https':
      return process.env.REACT_APP_REQUEST_HTTPS
    case 'socks4':
      return process.env.REACT_APP_REQUEST_SOCKS4
    default:
      return `${process.env.REACT_APP_REQUEST_OTHER}${protocol}`
  }
}

export const getRequestCountry = country => {
  switch (country) {
    case 'ALL':
      return process.env.REACT_APP_REQUEST_LOCATION_ALL
    default:
      return `${process.env.REACT_APP_REQUEST_LOCATION}${country}`
  }
}
