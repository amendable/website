import React from 'react'
import Box from '@amendable/core'

import Splash from './Splash'
import Concepts from './Concepts'
import Users from './Users'

export default (props) => (
  <Box>
    <Splash />
    <Concepts {...props} />
    <Users />
  </Box>
)
