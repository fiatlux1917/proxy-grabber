import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { GrabberPage } from '@/pages/GrabberPage'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <GrabberPage />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
