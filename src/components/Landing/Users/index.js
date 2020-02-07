import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Box from '../../Box'
import Heading from '../../Heading'
import Button from '../../Button'

import Item from './Item'

export default () => (
  <Box backgroundColor='#F9FBFC' padding paddingTop={5} paddingBottom={10} border='1px solid #E9EAE9'>
    <Box limited>
      <Heading level={2} fontWeight700 tight colorLightGrey lineHeight={.75}>
        Amendable
      </Heading>

      <Heading level={2} fontWeight700 tight>
        Showcase
      </Heading>

      <Box paddingTop={3} paddingBottom={3} displayFlex flexWrapWrap justifyContentCenter>
        <Item marginTop marginRight src='/users/domasbitvinskas.jpg' href='https://domasbitvinskas.com' />
        <Item marginTop marginRight src='/users/kurkim.jpg' href='https://kurkim.lt' />
        <Item marginTop marginRight src='/users/vaidalekaviciute.jpg' href='https://vaidalekaviciute.com' />
        <Item marginTop src='/users/bloometry.jpg' href='https://bloometry.com' />
      </Box>

      <Box displayFlex justifyContentCenter>
        <Button
          component={RouterLink}
          to='/docs'
          level={8}
          paddingLeft={2}
          paddingRight={2}
          textTransformUppercase
        >
          Get started with Amendable
        </Button>
      </Box>
    </Box>
  </Box>
)
