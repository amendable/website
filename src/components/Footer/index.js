import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Container from '@amendable/core'
import LogoBlock from '../LogoBlock'
import Link from '../Link'
import Text from '../Text'

export default () => (
  <Container padding paddingTop={3} paddingBottom={3} backgroundColorBlack colorWhite displayFlex alignItemsCenter>
    <Link component={RouterLink} to='/' displayFlex alignItemsCenter>
      <LogoBlock />
      <Text marginLeft fontWeight700>
        Amendable
      </Text>
    </Link>
  </Container>
)
