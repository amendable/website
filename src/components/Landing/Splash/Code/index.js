import React from 'react'
import Box from '@amendable/core'
import CodeWithSandbox from '../../../CodeWithSandbox'
import example from './example.txt'

const wrapper = (code) => `
  render(
    <AmendableProvider
      resolvers={[fluidScale(), colors({ colors: { aqua: '#66FCD9' } }), inlineStyles()]}
    >
      ${code}
    </AmendableProvider>
  )
`

export default () => (
  <Box minWidth={{ sm: 25 }}>
    <CodeWithSandbox
      editable
      sandbox
      wrapper={wrapper}
      level={5}
    >
      {example}
    </CodeWithSandbox>
  </Box>
)
