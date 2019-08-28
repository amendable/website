import React from 'react'
import Box from '@amendable/core'
import Checkmark from './Checkmark'

export default ({ children, ...rest }) => (
  <Box
    displayFlex
    alignItemsCenter
    level={8}
    colorLightBlack
    {...rest}
  >
    <Checkmark /> {children}
  </Box>
)
