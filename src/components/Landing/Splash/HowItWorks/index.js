import React from 'react'
import Box from '../../../Box'
import Block from './Block'

export default () => (
  <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
  >
    <Block
      title='Create your own prop resolvers'
    >
      <Box display='flex'>
        <Box>
          <Box
            fontFamily='monospace'
            whiteSpace='pre'
          >
            {`
const paddingResolver = {
  match: /padding/,
  resolve: ({ key, value }) => ({
    [key]: value * 16,
  })
}

<AmendableProvider
  resolvers={[
    paddingResolver(),
  ]}
>
  <Box padding={10}>
    Hi VilniusJS
  </Box>
</AmendableProvider>
            `}
          </Box>
        </Box>
      </Box>
    </Block>
  </Box>
)
