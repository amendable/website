import React from 'react'
import Box from '../components/Box'
import LogoBlock from '../components/LogoBlock'

export default (props) => (
  <Box displayInlineBlock marginLeft={.3} {...props}>
    <LogoBlock
      displayInlineBlock
      height={.7}
      width={.7}
      marginRight={.3}
      marginBottom={.05}
    />
    <Box displayInline fontWeight700>
      Amendable
    </Box>
  </Box>
)
