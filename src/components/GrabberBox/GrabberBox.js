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
  PROTOCOLS,
  COUNT_REQUEST,
  CLICK_GRAB,
  CLICK_SAVE,
} from '@/constants/grabber'

import './GrabberBox.scss'

const GrabberBox = props => {
  const { grabProxies, setProtocol, error, protocol, proxies } = props

  const handleProtocol = value => {
    setProtocol(value)
  }

  const handleClick = ({ target: { name } }) => {
    switch (name) {
      case CLICK_GRAB:
        for (let i = 0; i < COUNT_REQUEST; i++) {
          grabProxies(protocol.value)
        }
        break

      case CLICK_SAVE:
        saveProxy(proxies)
        break

      default:
        break
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
  grabProxies: T.func.isRequired,
  setProtocol: T.func.isRequired,
  error: T.string,
}

GrabberBox.defaultProps = {
  proxies: [],
  error: '',
}

export { GrabberBox }
