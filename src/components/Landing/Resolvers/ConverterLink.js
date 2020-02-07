import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Box from '../../Box'

export default ({ value, current, children }) => (
  <Box>
    <Box
      component={RouterLink}
      to={`/concepts/${value}`}
      level={5}
      colorLightBlack
      fontWeight700={value === current}
      marginBottom={.2}
    >
      {children} →
    </Box>
  </Box>
)
