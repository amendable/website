import React from 'react'
import Box from '@amendable/core'
import {
  useBreakpoints,
} from 'candour'

import Menu from './Menu/index'
import Content from './Content/index'

export default (props) => {
  const { small } = useBreakpoints()

  return (
    <Box borderTopLight displayFlex>
      {!small && <Menu {...props} />}
      <Content {...props} />
    </Box>
  )
}
