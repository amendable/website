import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Box from '@amendable/core'
import LogoBlock from '../LogoBlock'
import Link from '../Link'
import Text from '../Text'

export default () => (
  <Box padding paddingTop={3} paddingBottom={3} backgroundColorBlack colorWhite displayFlex alignItemsCenter>
    <Link component={RouterLink} to='/' displayFlex alignItemsCenter>
      <LogoBlock fill='white' />
      <Text marginLeft fontWeight700>
        Amendable
      </Text>
    </Link>
  </Box>
)
