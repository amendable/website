import React from 'react'
import Container from '@amendable/core'

export default (props) => (
  <Container
    backgroundColor='#F9FBFC'
    rounded
    fontFamily='monospace'
    whiteSpace='pre-wrap'
    fontSize={1}
    {...props}
  />
)
