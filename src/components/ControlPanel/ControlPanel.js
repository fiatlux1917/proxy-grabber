import React, { useState } from 'react'
import T from 'prop-types'

import Select from 'react-select'

import { Row, Col, FormGroup, Button } from 'reactstrap'
import { NotificationContainer, NotificationManager } from 'react-notifications'

import { TableResults } from '../TableResults'

import {
  protocols,
  ERROR_LABEL,
  MESSAGE_PROTOCOL,
  TIMEOUT_MESSAGE,
} from '@/constants/grabber'
import { saveProxy } from '@/utils/saveProxy'

import 'react-notifications/lib/notifications.css'
import './ControlPanel.scss'

const ControlPanel = ({ proxies, grabProxies }) => {
  const [protocol, setProtocol] = useState('')

  const handleProtocol = ({ value }) => {
    setProtocol(value)
  }

  const handleGrab = () => {
    if (protocol) {
      grabProxies(protocol)
    } else {
      showMesseage(MESSAGE_PROTOCOL)
    }
  }

  const handleSaveResult = () => {
    saveProxy(proxies)
  }

  const showMesseage = message => {
    NotificationManager.error(message, ERROR_LABEL, TIMEOUT_MESSAGE)
  }

  return (
    <div className="control-panel">
      <Row>
        <Col md={4}>
          <FormGroup>
            <Select
              options={protocols}
              onChange={handleProtocol}
              placeholder="select protocol..."
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
      <NotificationContainer />
    </div>
  )
}

ControlPanel.propTypes = {
  proxies: T.arrayOf(Object),
  grabProxies: T.func.isRequired,
}

ControlPanel.defaultProps = {
  proxies: [],
}

export { ControlPanel }
