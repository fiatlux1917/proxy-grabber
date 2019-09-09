import React, { useState } from 'react'

import { Row, Col, FormGroup, Button, Input } from 'reactstrap'
import { saveAs } from 'file-saver'

import { TableResults } from '../TableResults'

import './MainForm.scss'

const MainForm = ({ proxies, onGrabbing }) => {
  const [typeProxy, setTypeProxy] = useState('http')

  const handleTypeProxy = ({ target: { value } }) => {
    setTypeProxy(value)
  }

  const getFormatProxy = proxyList => {
    const result = []
    proxyList.map(proxy => result.push(`${proxy.ip}:${proxy.port}`))
    return result
  }

  const grabbing = e => {
    onGrabbing(typeProxy)
  }

  const saveToFile = () => {
    const saveResult = getFormatProxy(proxies).join('\n')
    const data = new Blob([saveResult], { type: 'text/plain' })
    saveAs(data, 'proxy.txt')
  }

  return (
    <div className="main-form">
      <Row>
        <Col md={1}>Protocol:</Col>
        <Col md={2}>
          <FormGroup>
            <Input
              type="select"
              name="select"
              bsSize="sm"
              onChange={handleTypeProxy}
            >
              <option>http</option>
              <option>socks4</option>
            </Input>
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
            <Button className="button-form" onClick={grabbing}>
              Grab
            </Button>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Button className="button-form" onClick={saveToFile}>
              Save to txt
            </Button>
          </FormGroup>
        </Col>
      </Row>
    </div>
  )
}

export { MainForm }
