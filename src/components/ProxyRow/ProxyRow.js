import React from 'react'
import T from 'prop-types'

const ProxyRow = ({ proxy, index }) => {
  return (
    <tr key={proxy.ip}>
      <th scope="row">{++index}</th>
      <td>{proxy.ip}</td>
      <td>{proxy.port}</td>
      <td>{proxy.protocol}</td>
      <td>{proxy.location}</td>
      <th>{proxy.ssl ? 'yes' : 'no'}</th>
    </tr>
  )
}

ProxyRow.propTypes = {
  proxy: T.object.isRequired,
  index: T.number,
}

export { ProxyRow }
