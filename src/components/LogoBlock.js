import React from 'react'
import Container from '@amendable/core'
import { ReactComponent as Icon } from '../assets/logo-block.svg'

export default (props) => (
  <Container component={Icon} height width borderRadius='3px' {...props} />
)
