export const getRequestString = protocol => {
  switch (protocol) {
    case 'all':
      return process.env.REACT_APP_REQUEST_ALL
    case 'http':
      return process.env.REACT_APP_REQUEST_HTTP
    case 'https':
      return process.env.REACT_APP_REQUEST_HTTPS
    case 'socks4':
      return process.env.REACT_APP_REQUEST_HTTPS
    default:
      return `${process.env.REACT_APP_REQUEST_OTHER}${protocol}`
  }
}
