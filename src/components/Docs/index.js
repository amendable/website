import React from 'react'
import Box from '@amendable/core'
import Menu from './Menu/index'
import Content from './Content/index'

export default (props) => (
  <Box borderTopLight displayFlex>
    <Box display={{ xs: 'none', sm: 'block' }}>
      <Menu {...props} />
    </Box>
    <Content {...props} />
  </Box>
)
