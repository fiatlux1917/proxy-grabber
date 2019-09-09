import React from 'react'
import T from 'prop-types'

import { ProxyRow } from '../ProxyRow'

import './TableResult.scss'

const TableResults = ({ proxies }) => {
  return (
    <div className="table-wrapper-scroll-y custom-scrollbar">
      <table className="table table-bordered table-striped mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>ip</th>
            <th>port</th>
            <th>protocol</th>
            <th>country</th>
            <th>ssl</th>
          </tr>
        </thead>
        <tbody>
          {proxies.map((proxy, index) => {
            return <ProxyRow proxy={proxy} index={index} />
          })}
        </tbody>
      </table>
    </div>
  )
}

TableResults.propTypes = {
  proxies: T.arrayOf(Object),
}

TableResults.defaultProps = {
  proxies: [],
}

export { TableResults }
