import React from 'react'

import { Row, Col, Form, FormGroup, Button, Input } from 'reactstrap'

import { TableResults } from '../TableResults'
import { proxies } from './test'

import './MainForm.scss'

const MainForm = props => {
  return (
    <Form className="main-form">
      <Row>
        <Col md={1}>Protocol:</Col>
        <Col md={2}>
          <FormGroup>
            <Input type="select" name="select" size="sm">
              <option>HTTP(S)</option>
              <option>SOCKS4(5)</option>
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
          <Button className="button-form">Grab</Button>
        </Col>
        <Col md={6}>
          <Button className="button-form">Save to txt</Button>
        </Col>
      </Row>
    </Form>
  )
}

export { MainForm }
