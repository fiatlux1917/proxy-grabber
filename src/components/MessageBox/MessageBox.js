import React, { Fragment } from 'react'
import T from 'prop-types'

import { Alert } from 'reactstrap'

const MessageBox = ({ message }) => {
  return (
    <Fragment>
      <Alert color="dark">{message}</Alert>
    </Fragment>
  )
}

T.defaultProps = {
  message: '',
}

T.propTypes = {
  message: T.string,
}

export { MessageBox }
