import React from 'react'
import Box from '@amendable/core'
import Menu from './Menu/index'
import Content from './Content/index'

export default (props) => (
  <Box borderTopLight displayFlex alignItems='stretch'>
    <Box
      display={{ xs: 'none', sm: 'block' }}
      display='flex'
      flexDirection='column'
    >
      <Menu {...props} />
    </Box>
    <Content {...props} />
  </Box>
)
