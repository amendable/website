import React from 'react'
import ReactDOM from 'react-dom'
import { AmendableProvider } from '@amendable/core'
import CandourNormalize from 'candour-normalize'

import './theme/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import amendableResolvers from './theme/amendableResolvers'

ReactDOM.render(
  <AmendableProvider
    resolvers={amendableResolvers}
  >
    <CandourNormalize />
    <App />
  </AmendableProvider>
, document.getElementById('root'))

registerServiceWorker()
