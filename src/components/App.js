import React from 'react'
import Box from '@amendable/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { ScrollContext } from 'react-router-scroll-4'

import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import Docs from './Docs/index'
import SmallMenuContent from './SmallMenu/Content'

const shouldUpdateScroll = (
  _prevProps,
  {
    location: {
      pathname,
    },
  },
) => !pathname.match(/^\/concepts/)

export default () => (
  <Box>
    <Meta />
    <Router>
      <ScrollContext shouldUpdateScroll={shouldUpdateScroll}>
        <div>
          <Route component={Header} />
          <Route component={SmallMenuContent} />
          <Switch>
            <Route exact path='/docs/*' component={Docs} />
            <Redirect exact from='/docs' to='/docs/overview' />
            <Redirect exact from='/' to='/docs/overview' />
          </Switch>
          <Route component={Footer} />
        </div>
      </ScrollContext>
    </Router>
  </Box>
)
