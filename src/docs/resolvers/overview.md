# Resolvers overview

Resolvers are useful when defining colors,
borders or any other custom values that are going to be reused.

## Setup

To set up resolvers, pass `resolvers` array to the `AmendableProvider`.

```jsx sandbox
import React from 'react'
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import scale from '@amendable/scale'
import colors from '@amendable/colors'
import inlineStyles from '@amendable/inline-styles'

render(
  <AmendableProvider
    resolvers={[
      scale({ base: 16 }),
      colors({ colors: { primary: '#0055ff' } }),
      inlineStyles()
    ]}
  >
    <Box fontSize={2}>
      Size style values will be resolved with scale resolver and multiplied by 16
    </Box>

    <Box color='primary'>
      Color style values will be resolved with colors resolver
    </Box>
  </AmendableProvider>,
  document.getElementById('root')
)
```

### Value names

It is best is the redefined value names follow CSS style `kebab-case` format.

To define a multi-word color:
```
{ 'light-red': '#D45D8A' }
```
