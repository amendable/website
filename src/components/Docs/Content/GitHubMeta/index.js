import React from 'react'
import Box from '../../../Box'
import Link from '../../../Link'

import editUrl from './lib/editUrl'

export default (props) => (
  <Box paddingBottom={2} displayFlex justifyContentCenter>
    <Link component='a' href={editUrl(props)} target='_blank' fontWeight300>
      Edit this page on GitHub
    </Link>
  </Box>
)
