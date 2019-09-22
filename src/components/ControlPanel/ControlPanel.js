import React from 'react'
import T from 'prop-types'

import Select from 'react-select'

import { Row, Col, FormGroup, Button } from 'reactstrap'

import { TableResults } from '../TableResults'

import { protocols } from '@/constants/grabber'
import { saveProxy } from '@/utils/saveProxy'
import { setProxyProtocol } from '@/actions/grabber'

import './ControlPanel.scss'

const ControlPanel = ({ proxies, grabProxies, protocol }) => {
  const handleProtocol = ({ value }) => {
    setProxyProtocol(value)
  }

  const handleGrab = () => {
    grabProxies(protocol)
  }

  const handleSaveResult = () => {
    saveProxy(proxies)
  }

  return (
    <div className="control-panel">
      <Row>
        <Col md={3}>
          <FormGroup>
            <Select
              options={protocols}
              onChange={handleProtocol}
              placeholder="select proxy protocol..."
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <TableResults proxies={proxies} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Button onClick={handleGrab} block>
              Grab
            </Button>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Button onClick={handleSaveResult} block>
              Save to txt
            </Button>
          </FormGroup>
        </Col>
      </Row>
    </div>
  )
}

ControlPanel.propTypes = {
  proxies: T.arrayOf(Object),
  protocol: T.string,
  grabProxies: T.func.isRequired,
}

ControlPanel.defaultProps = {
  proxies: [],
  protocol: 'all',
}

export { ControlPanel }
