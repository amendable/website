import React from 'react'
import Box from '@amendable/core'
import { ReactComponent as Icon } from '../assets/logo-block.svg'

export default (props) => (
  <Box component={Icon} height width borderRadius='3px' {...props} />
)
