import React from 'react'
import Box from '@amendable/core'

export default (props) => (
  <Box
    backgroundColor='#F9FBFC'
    rounded
    fontFamily='monospace'
    whiteSpace='pre-wrap'
    fontSize={1}
    {...props}
  />
)
