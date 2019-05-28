# Overview of style value resolvers

Style value resolvers are useful when defining colors,
borders or any other custom style values that are going to be reused.

## Setup

To set up style value resolvers, pass `resolvers` array to the `AmendableProvider`.

```jsx sandbox
import React from 'react'
import { render } from 'react-dom'
import Container, { AmendableProvider } from '@amendable/core'
import fluidScale from '@amendable/fluid-scale'
import colors from '@amendable/colors'
import inlineStyles from '@amendable/inline-styles'

render(
  <AmendableProvider
    resolvers={[
      fluidScale(),
      colors({ colors: { raddish: '#D41E5C' } }),
      inlineStyles()
    ]}
  >
    <Container fontSize={2}>
      Size style values will be resolved with fluid steps resolvers
    </Container>

    <Container color='raddish'>
      Color style values will be resolved with colors resolvers
    </Container>
  </AmendableProvider>,
  document.getElementById('root')
)
```

## Usage

You can use both shorthand `colorRaddish` and longhand `color='raddish'`
syntax with all resolvers. You can also use them in your [theme](/docs/theme/base).

### Style value naming

Redefined value names need to follow CSS style `kebab-case` format.

To define a multi-word color:
```
{ 'light-red': '#D45D8A' }
```

If you define it as `light-red`, you can still use it from the primitives
as `colorLightRed` or `color='light-red'`.

## List of available resolvers and their usage

Here's a list of currently supported style value resolvers:

| Resolver                                      | Input                                                           | Output
| -------------                                  | --------                                                        | ---
| [fluidScale](/docs/resolvers/fluid-scale)     | Values for size props specified without type (`2`, `3.5`, etc.) | Fluid CSS value based on step (`calc(21px + (6 * ((100vw - 320px) / 1280)))`).
| [colors](/docs/resolvers/colors)              | All values for color properties                                 | Picks by key from `colors` config.

> **Note**

> You can also learn how to create a new resolvers [here](/docs/resolvers/create-new).
