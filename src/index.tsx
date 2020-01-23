import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import { configureStore } from './store/configureStore'
import { App } from './App'

import { Provider } from 'react-redux'

import 'semantic-ui-css/semantic.min.css'
import 'sanitize.css'
import './index.scss'

const store = configureStore({})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
