import React from 'react'
import Box from '@amendable/core'
// import Point from './Point/index'
import HowItWorks from './HowItWorks'

export default (props) => (
  <Box
    padding
    paddingTop={{ sm: 1, md: 5 }}
    paddingBottom={3}
    limited
  >
    <Box maxWidth={25} textAlignCenter margin='0 auto'>
      <Box
        fontSize={3}
        lineHeight={1.25}
        fontWeight={700}
        paddingBottom={3}
      >
        Redefine any React component prop easily.
      </Box>
    </Box>

    <HowItWorks />
  </Box>
)
//      <Box
//        display={{ xs: 'block', sm: 'flex' }}
//        paddingBottom={3}
//        paddingTop={3}
//      >
//        <Point paddingRight={1.5}>
//          Redefine any CSS value
//        </Point>
//        <Point paddingRight={1.5}>
//          Theme easily
//        </Point>
//        <Point paddingRight={1.5}>
//          Minimal, performant
//        </Point>
//      </Box>
