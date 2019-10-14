import React from 'react'
import T from 'prop-types'

import Select from 'react-select'

import { Button, FormGroup, Row } from 'reactstrap'

import { ComponentBox } from '../ComponentBox'
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
  COUNTRIES_LIST,
  PROTOCOLS,
} from '@/constants/grabber'

import './GrabberBox.scss'

const GrabberBox = props => {
  const {
    clearData,
    grabProxies,
    setProtocol,
    setCountry,
    grabberState: { country, error, protocol, proxies },
  } = props

  const handleCountry = value => setCountry(value)

  const handleProtocol = value => setProtocol(value)

  const handleClick = ({ target: { name } }) => {
    switch (name) {
      case CLICK_CLEAR:
        clearData()
        break

      case CLICK_GRAB:
        grabWholesaleProxies(protocol.value, country.value)
        break

      case CLICK_SAVE:
        saveProxy(proxies)
        break

      default:
        break
    }
  }

  const grabWholesaleProxies = (protocol, country) => {
    for (let i = 0; i < COUNT_REQUEST; i++) {
      grabProxies(protocol, country)
    }
  }

  return (
    <div className="grabber-box">
      <HeaderBox />
      <Row>
        <ComponentBox colSize={2}>
          <Select
            options={PROTOCOLS}
            value={protocol}
            onChange={handleProtocol}
            placeholder="protocol..."
          />
        </ComponentBox>
        <ComponentBox colSize={3}>
          <Select
            options={COUNTRIES_LIST}
            value={country}
            onChange={handleCountry}
            placeholder="country..."
          />
        </ComponentBox>
        <ComponentBox colSize={7}>
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
        </ComponentBox>
      </Row>
      <Row>
        <ComponentBox>
          <TableResults proxies={proxies} />
        </ComponentBox>
      </Row>
      <Row>
        <ComponentBox colSize={6}>
          <Button name="grab" onClick={handleClick} block>
            Grab
          </Button>
        </ComponentBox>
        <ComponentBox colSize={6}>
          <Button name="save" onClick={handleClick} block>
            Save to txt
          </Button>
        </ComponentBox>
      </Row>
      <InfoBox countProxies={proxies.length} />
    </div>
  )
}

GrabberBox.propTypes = {
  clearData: T.func.isRequired,
  grabProxies: T.func.isRequired,
  setProtocol: T.func.isRequired,
  setCountry: T.func.isRequired,
  grabberState: T.object.isRequired,
}

export { GrabberBox }
