# Resolvers overview

Resolvers are useful when defining colors,
borders or any other custom style values that are going to be reused.

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
      colors({ colors: { raddish: '#D41E5C' } }),
      inlineStyles()
    ]}
  >
    <Box fontSize={2}>
      Size style values will be resolved with scale resolver and multiplied by 16
    </Box>

    <Box color='raddish'>
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

## List of available resolvers and their usage

Here's a list of currently supported style value resolvers:

| Resolver                                      | Input                                                           | Output
| -------------                                  | --------                                                        | ---
| [fluidScale](/docs/resolvers/fluid-scale)     | Values for size props specified without type (`2`, `3.5`, etc.) | Fluid CSS value based on step (`calc(21px + (6 * ((100vw - 320px) / 1280)))`).
| [colors](/docs/resolvers/colors)              | All values for color properties                                 | Picks by key from `colors` config.

> **Note**

> You can also learn how to create a new resolvers [here](/docs/resolvers/create-new).
