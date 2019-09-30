import React from 'react'
import T from 'prop-types'

import { Alert } from 'reactstrap'

import './MessageBox.scss'

const MessageBox = ({ message }) => {
  return (
    <Alert className="message-box" color="dark">
      {message}
    </Alert>
  )
}

T.defaultProps = {
  message: '',
}

T.propTypes = {
  message: T.string,
}

export { MessageBox }
