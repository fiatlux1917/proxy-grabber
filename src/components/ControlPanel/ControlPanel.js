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
  MAX_COUNT_GRAB,
} from '@/constants/grabber'
import { saveProxy } from '@/utils/saveProxy'

import 'react-notifications/lib/notifications.css'
import './ControlPanel.scss'

const ControlPanel = ({ proxies, error, grabProxies }) => {
  const [protocol, setProtocol] = useState('')

  const handleProtocol = ({ value }) => {
    setProtocol(value)
  }

  const handleGrab = () => {
    if (protocol) {
      for (let i = 0; i < MAX_COUNT_GRAB; i++) {
        grabProxies(protocol)
      }
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
      <h4>Proxy grabber</h4>
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
      <h5>1 grab ~ 1000 proxies, duplicates are possible</h5>
      <span>
        coded by{' '}
        <a href="https://github.com/JubasNTC/proxy-grabber">JubasNTC</a>
      </span>
      <NotificationContainer />
    </div>
  )
}

ControlPanel.propTypes = {
  proxies: T.arrayOf(Object),
  grabProxies: T.func.isRequired,
  error: T.string,
}

ControlPanel.defaultProps = {
  proxies: [],
  error: '',
}

export { ControlPanel }
