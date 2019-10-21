import React from 'react'
import Box from '@amendable/core'
import LogoBlock from '../../../LogoBlock'
import Block from './Block'

export default () => (
  <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
  >
    <Block
      title='Your Components'
    >
      <Box
        fontFamily='monospace'
        whiteSpace='pre'
      >
        {`
<Box
  padding={1}
/>
        `}
      </Box>
    </Block>

    <Box
      color='blue'
      fontSize={2}
    >
      →
    </Box>

    <Block
      title={
        <>
          <LogoBlock marginRight={0.5} />
          @amendable/scale resolver
        </>
      }
    >
      <Box display='flex'>
        <Box>
          <Box
            fontFamily='monospace'
            whiteSpace='pre'
          >
            {`
<Box
  padding={1}
/>
            `}
          </Box>
          <Box color='blue' fontSize={1.5}>
            ↓
          </Box>
          <Box
            fontFamily='monospace'
            whiteSpace='pre'
          >
            {`
{
  padding: '16px'
}
            `}
          </Box>
        </Box>
      </Box>
    </Block>

    <Box
      color='blue'
      fontSize={2}
    >
      →
    </Box>

    <Block
      title='React Output'
    >
      <Box
        fontFamily='monospace'
        whiteSpace='pre'
      >
        {`
<div
  padding='16px'
/>
        `}
      </Box>
    </Block>
  </Box>
)
