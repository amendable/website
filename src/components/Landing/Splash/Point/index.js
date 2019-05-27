import React from 'react'
import Container from '@amendable/core'
import Checkmark from './Checkmark'

export default ({ children, ...rest }) => (
  <Container
    displayFlex
    alignItemsCenter
    level={8}
    colorLightBlack
    {...rest}
  >
    <Checkmark /> {children}
  </Container>
)
