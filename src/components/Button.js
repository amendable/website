import React from 'react'
import Box from './Box'

export default (props) => (
  <Box
    backgroundColor='black'
    color='white'
    cursor='pointer'
    textTransform='uppercase'
    boxShadow='0 3px 10px hsla(0, 0%, 0%, 0.3)'
    padding
    paddingTop={.7}
    paddingBottom={.8}
    rounded
    fontSize={1}
    {...props}
  />
)
