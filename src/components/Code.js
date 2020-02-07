import React from 'react'
import Box from './Box'

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
