import React from 'react'
import Box from '../../../Box'
import CodeWithSandbox from '../../../CodeWithSandbox'
import example from './example.txt'

const wrapper = (code) => `
  render(
    <AmendableProvider
      resolvers={[fluidScale(), colors({ colors: { blue: '#0055ff' } }), inlineStyles()]}
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
