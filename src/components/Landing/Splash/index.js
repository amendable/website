import React from 'react'
import Box from '@amendable/core'
import { Link as RouterLink } from 'react-router-dom'
import Code from './Code/index'
import Point from './Point/index'
import Button from '../../Button'

export default (props) => (
  <Box
    padding
    paddingTop={{ sm: 1, md: 5 }}
    paddingBottom={3}
    display={{ xs: 'block', sm: 'flex' }}
    justifyContentSpaceBetween
    limited
  >
    <Box maxWidth={32} paddingRight={2}>
      <Box
        fontSize={2}
        lineHeight={1.25}
        fontWeight={700}
        paddingBottom={2}
        tight
      >
        Next-gen React<br/>Design Abstraction Layer
      </Box>

      <Box paddingBottom={2.6} level={4} colorLightBlack>
        <Box fontWeight500 level={4} displayInline>Amendable</Box> is
          an abstraction layer to build context-aware designs systems.
      </Box>

      <Button
        component={RouterLink}
        to='/docs'
        paddingLeft={2}
        paddingRight={2}
        fontWeight700
        textTransformUppercase
      >
        Learn more
      </Button>

      <Box
        display={{ xs: 'block', sm: 'flex' }}
        paddingBottom={3}
        paddingTop={3}
      >
        <Point paddingRight={1.5}>
          Redefine any CSS value
        </Point>
        <Point paddingRight={1.5}>
          Theme easily
        </Point>
        <Point paddingRight={1.5}>
          Minimal, performant
        </Point>
      </Box>
    </Box>

    <Code />
  </Box>
)
