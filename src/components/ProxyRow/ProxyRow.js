import React from 'react'
import T from 'prop-types'

import moment from 'moment'

const ProxyRow = ({ proxy, index }) => {
  return (
    <tr key={proxy.ip}>
      <th className="th-sm" scope="row">
        {++index}
      </th>
      <td>{proxy.ip}</td>
      <td>{proxy.port}</td>
      <td>{proxy.protocol}</td>
      <td>{proxy.ssl.toString()}</td>
      <td>
        {moment
          .unix(proxy.lastChecked)
          .startOf('hour')
          .fromNow()}
      </td>
      <td>{proxy.location}</td>
      <td>{proxy.websites.amazon.toString()}</td>
      <td>{proxy.websites.google.toString()}</td>
      <td>{proxy.websites.facebook.toString()}</td>
      <td>{proxy.websites.twitch.toString()}</td>
      <td>{proxy.websites.netflix.toString()}</td>
    </tr>
  )
}

ProxyRow.propTypes = {
  proxy: T.object.isRequired,
  index: T.number,
}

export { ProxyRow }
