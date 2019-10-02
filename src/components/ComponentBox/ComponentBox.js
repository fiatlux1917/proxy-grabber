import React from 'react'
import T from 'prop-types'

import { Col, FormGroup } from 'reactstrap'

const ComponentBox = ({ children, colSize }) => {
  return (
    <Col md={colSize}>
      <FormGroup>{children}</FormGroup>
    </Col>
  )
}

ComponentBox.propTypes = {
  children: T.node.isRequired,
  colSize: T.number,
}

ComponentBox.defaultProps = {
  colSize: 12,
}

export { ComponentBox }
