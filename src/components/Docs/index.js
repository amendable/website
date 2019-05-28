import React from 'react'
import Container from '@amendable/core'
import {
  useBreakpoints,
} from 'candour'

import Menu from './Menu/index'
import Content from './Content/index'

export default (props) => {
  const { small } = useBreakpoints()

  return (
    <Container borderTopLight displayFlex>
      {!small && <Menu {...props} />}
      <Content {...props} />
    </Container>
  )
}
