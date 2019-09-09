import React from 'react'

import './TableResult.scss'

const TableResults = ({ proxies }) => {
  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <table className="table table-bordered table-striped mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>ip</th>
            <th>port</th>
            <th>protocol</th>
            <th>country</th>
          </tr>
        </thead>
        <tbody>
          {proxies.map((proxy, index) => {
            return (
              <tr>
                <th scope="row">{++index}</th>
                <td>{proxy.ip}</td>
                <td>{proxy.port}</td>
                <td>{proxy.protocol}</td>
                <td>{proxy.location}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export { TableResults }
