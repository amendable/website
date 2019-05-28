import React from 'react'
import {
  useBreakpoints,
} from 'candour'
import Container from '@amendable/core'
import { Link as RouterLink } from 'react-router-dom'
import Code from './Code/index'
import Point from './Point/index'
import Button from '../../Button'

export default (props) => {
  const { small } = useBreakpoints()

  return (
    <Container
      padding
      paddingTop={small ? 1 : 5}
      paddingBottom={3}
      displayFlex={!small}
      justifyContentSpaceBetween
      limited
    >
      <Container maxWidth={32} paddingRight={2}>
        <Container
          fontSize={2}
          lineHeight={1.25}
          fontWeight={700}
          paddingBottom={2}
          tight
        >
          Next-gen React<br/>Design Abstraction Layer
        </Container>

        <Container paddingBottom={2.6} level={4} colorLightBlack>
          <Container fontWeight500 level={4} displayInline>Amendable</Container> is
            an abstraction layer to build context-aware designs systems.
        </Container>

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

        <Container
          displayFlex={!small}
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
        </Container>
      </Container>

      <Code />
    </Container>
  )
}
