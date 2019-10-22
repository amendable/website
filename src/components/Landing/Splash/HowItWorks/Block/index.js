import React from 'react'
import Box from '@amendable/core'

export default ({
  title,
  children,
}) => (
  <Box display='flex' marginX={0.5}>
    <Box
      backgroundColor='transparent-blue'
      border='1px solid blue'
      padding={1}
      borderRadius='10px'
    >
      <Box fontWeight700 fontSize={1.2}>
        {title}
      </Box>

      {children}
    </Box>
  </Box>
)
