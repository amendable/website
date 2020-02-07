import React from 'react'
import { ReactComponent as Icon } from '../assets/logo-block.svg'
import Box from './Box'

export default (props) => (
  <Box component={Icon} height width borderRadius='3px' {...props} />
)
