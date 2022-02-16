import React from 'react'
import { render } from 'react-dom'
import './index.css'
import 'videojs-contrib-eme'
import 'videojs-ima/dist/videojs.ima.css'
import 'videojs-contrib-ads'
import 'videojs-ima/dist/videojs.ima'
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { ErrorBoundary } from './components/Error/ErrorBoundary'
import App from './containers/App/App'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <Router>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  </Provider>,

  target
)
