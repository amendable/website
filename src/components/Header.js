import React from 'react'
import Box from '@amendable/core'
import {
  Link as RouterLink,
} from 'react-router-dom'
import LogoBlock from './LogoBlock'
import SmallMenuIcon from './SmallMenu/Icon'
import Text from './Text'
import Link from './Link'

export default (props) => (
  <Box
    displayFlex
    justifyContentSpaceBetween
    alignItemsCenter
    padding
    paddingTop={1.5}
    paddingBottom={1.5}
  >
    <Link component={RouterLink} to='/' displayFlex alignItemsCenter>
      <LogoBlock />
      <Text marginLeft={0.5} fontWeight700>
        Amendable
      </Text>
    </Link>
    <Box display={{ xs: 'none', sm: 'flex' }} alignItemsCenter>
      <Link
        component={RouterLink}
        to='/docs/overview'
        level={8}
        marginLeft={3}
        fontWeight='normal'
      >
        Docs
      </Link>
      <Link
        href='https://github.com/amendable/core'
        target='_blank'
        marginLeft={3}
        level={8}
        fontWeight='normal'
      >
        GitHub
      </Link>
    </Box>
    <Box display={{ sm: 'none' }}>
      <SmallMenuIcon {...props} />
    </Box>
  </Box>
)
