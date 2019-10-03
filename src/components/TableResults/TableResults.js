import React from 'react'
import T from 'prop-types'

import ReactTable from 'react-table'

import { columns } from '@/constants/grabber'

import 'react-table/react-table.css'

const TableResults = ({ proxies }) => {
  return (
    <div>
      <ReactTable data={proxies} defaultPageSize={10} columns={columns} />
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
