import React from 'react'
import Container from '@amendable/core'

import Splash from './Splash'
import Concepts from './Concepts'
import Users from './Users'

export default (props) => (
  <Container>
    <Splash />
    <Concepts {...props} />
    <Users />
  </Container>
)
