import React from 'react'
import Box from '@amendable/core'
import Link from '../../Link'

export default ({ href, ...rest }) => (
  <Link href={href} target='_blank'>
    <Box
      component='img'
      backgroundSize='contain'
      height={{ xs: 'auto', md: 11 }}
      width={{ xs: '100%', md: 'auto' }}
      rounded
      boxShadow='0 3px 10px hsla(0, 0%, 0%, 0.3)'
      {...rest}
    />
  </Link>
)
