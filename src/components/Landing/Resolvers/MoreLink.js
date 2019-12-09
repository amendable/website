import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Box from '@amendable/core'
import Link from '../../Link'

export default (props) => (
  <Box>
    <Link
      level={7}
      component={RouterLink}
      displayInlineBlock
      marginTop
      fontWeight700
      borderBottomBlue
      {...props}
    />
  </Box>
)
