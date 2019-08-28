import React from 'react'
import Box from '@amendable/core'
import {
  useBreakpoints,
} from 'candour'
import {
  Link as RouterLink,
} from 'react-router-dom'
import LogoBlock from './LogoBlock'
import SmallMenuIcon from './SmallMenu/Icon'
import Text from './Text'
import Link from './Link'

export default (props) => {
  const { small } = useBreakpoints()

  return (
    <>
      <Box
        displayFlex
        justifyContentSpaceBetween
        alignItemsCenter
        padding
        paddingTop={1.5}
        paddingBottom={1.5}
        fontWeight700
      >
        <Link component={RouterLink} to='/' displayFlex alignItemsCenter>
          <LogoBlock />
          <Text marginLeft={0.5} fontWeight700>
            Amendable
          </Text>
        </Link>
        {!small && <Box displayFlex alignItemsCenter>
          <Link
            component={RouterLink}
            to='/docs/overview'
            textTransformUppercase
            level={8}
            marginLeft={3}
            color='hsla(0, 0%, 40%, 1)'
          >
            Docs
          </Link>
          <Link
            href='https://github.com/amendable/core'
            target='_blank'
            marginLeft={3}
            level={8}
            textTransformUppercase
            color='hsla(0, 0%, 40%, 1)'
          >
            GitHub
          </Link>
        </Box>}
        {small && <SmallMenuIcon {...props} />}
      </Box>
    </>
  )
}
