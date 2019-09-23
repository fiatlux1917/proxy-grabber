import React from 'react'
import T from 'prop-types'

import { ProxyRow } from '../ProxyRow'

import './TableResult.scss'

const TableResults = ({ proxies }) => {
  return (
    <div className="result-table">
      <table className="table table-striped table-bordered table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>ip</th>
            <th>port</th>
            <th>protocol</th>
            <th>country</th>
            <th>ssl</th>
            <th>amazon</th>
            <th>google</th>
            <th>facebook</th>
            <th>twitch</th>
            <th>netflix</th>
          </tr>
        </thead>
        <tbody>
          {proxies.map((proxy, index) => {
            return (
              <ProxyRow
                key={`${proxy.ip}-${index}`}
                proxy={proxy}
                index={index}
              />
            )
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
