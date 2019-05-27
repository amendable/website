import React from 'react'
import {
  useBreakpoints,
} from 'candour'
import Container from '@amendable/core'
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

export default () => {
  const { small } = useBreakpoints()

  return (
    <Container minWidth25={!small}>
      <CodeWithSandbox
        editable
        sandbox
        wrapper={wrapper}
        level={5}
      >
        {example}
      </CodeWithSandbox>
    </Container>
  )
}
