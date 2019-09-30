import React from 'react'
import T from 'prop-types'

import Select from 'react-select'

import { Button, Col, FormGroup, Row } from 'reactstrap'

import { HeaderBox } from '../HeaderBox'
import { MessageBox } from '../MessageBox'
import { InfoBox } from '../InfoBox'
import { TableResults } from '../TableResults'

import { saveProxy } from '@/utils/file-saver'
import {
  CLICK_CLEAR,
  CLICK_GRAB,
  CLICK_SAVE,
  COUNT_REQUEST,
  PROTOCOLS,
} from '@/constants/grabber'

import './GrabberBox.scss'

const GrabberBox = props => {
  const {
    clearData,
    grabProxies,
    setProtocol,
    error,
    protocol,
    proxies,
  } = props

  const handleProtocol = value => {
    setProtocol(value)
  }

  const handleClick = ({ target: { name } }) => {
    switch (name) {
      case CLICK_CLEAR:
        clearData()
        break

      case CLICK_GRAB:
        grabWholesaleProxies(protocol.value)
        break

      case CLICK_SAVE:
        saveProxy(proxies)
        break

      default:
        break
    }
  }

  const grabWholesaleProxies = protocol => {
    for (let i = 0; i < COUNT_REQUEST; i++) {
      grabProxies(protocol)
    }
  }

  return (
    <div className="grabber-box">
      <HeaderBox />
      <Row>
        <Col md={4}>
          <FormGroup>
            <Select
              options={PROTOCOLS}
              value={protocol}
              onChange={handleProtocol}
              placeholder="select protocol..."
            />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            {error && <MessageBox message={`error: ${error}`} />}
          </FormGroup>
          <FormGroup>
            <Button
              className="button-clear"
              size="sm"
              name="clear"
              onClick={handleClick}
            >
              Clear
            </Button>
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
            <Button name="grab" onClick={handleClick} block>
              Grab
            </Button>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Button name="save" onClick={handleClick} block>
              Save to txt
            </Button>
          </FormGroup>
        </Col>
      </Row>
      <InfoBox />
    </div>
  )
}

GrabberBox.propTypes = {
  proxies: T.arrayOf(Object),
  clearData: T.func.isRequired,
  grabProxies: T.func.isRequired,
  setProtocol: T.func.isRequired,
  error: T.string,
}

GrabberBox.defaultProps = {
  proxies: [],
  error: '',
}

export { GrabberBox }
