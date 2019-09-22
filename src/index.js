import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import * as serviceWorker from './serviceWorker'

import GrabberContainer from '@/containers/GrabberContainer/GrabberContainer'

import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

const store = configureStore()
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <GrabberContainer />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
