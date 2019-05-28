import React from 'react'
import Container from '@amendable/core'
import LogoBlock from '../components/LogoBlock'

export default (props) => (
  <Container displayInlineBlock marginLeft={.3} {...props}>
    <LogoBlock
      displayInlineBlock
      height={.7}
      width={.7}
      marginRight={.3}
      marginBottom={.05}
    />
    <Container displayInline fontWeight700>
      Amendable
    </Container>
  </Container>
)
