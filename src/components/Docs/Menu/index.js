import React from 'react'
import Box from '@amendable/core'
import Link from '../../Link'

import docs from '../../../docs/index'
import Items from './Items'

export default (props) => (
  <Box padding borderRightLight minWidth={12} minHeight='100vh'>
    <Items items={docs} {...props} />

    <Link
      href='https://github.com/amendable/core'
      target='_blank'
      level={props.level}
    >
      GitHub
    </Link>
  </Box>
)
