import React from 'react'
import {
  Link as RouterLink,
} from 'react-router-dom'
import Box from '../Box'
import Link from '../Link'

export default ({
  location: {
    state: {
      menu,
    } = {},
  },
}) => (
  <Link
    component={RouterLink}
    to={{ state: { menu: !menu } }}
    padding
    paddingRight={0}
  >
    <Box
      borderTopBlack
      borderBottomBlack
      height={.5}
      width={1.25}
    />
  </Link>
)
