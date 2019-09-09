import React, { useState } from 'react'

import { Container } from 'reactstrap'

import { MainForm } from '@/components/MainForm'
import { grabProxies } from '@/api'

const App = () => {
  const [proxiesList, setProxies] = useState([])

  const _onSuccess = proxies => {
    setProxies(proxiesList.concat(proxies))
  }

  const _onFailure = () => {
    console.log('Failure grabbing...')
  }

  const onGrabbing = typeProxy => {
    grabProxies(typeProxy, _onSuccess, _onFailure)
  }

  return (
    <Container>
      <MainForm onGrabbing={onGrabbing} proxies={proxiesList} />
    </Container>
  )
}

export { App }
