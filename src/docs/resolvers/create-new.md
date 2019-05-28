# Create a new resolver

When you pass `resolvers` to `AmendableProvider`, they will be evaluated
sequentially.

The first resolver that returns `true` from it's `match` function will return
the `value` to the style prop.

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
      inlineStyles(),
    ]}
  >
    Your app here

    <Container fontSize={2}>
      Size style values will be resolved with fluid scale resolver
    </Container>

    <Container color='raddish'>
      Color style values will be resolved with colors resolver
    </Container>
  </AmendableProvider>,
  document.getElementById('root')
)
```

## Structure

This is the gist of the `colors` resolver:
```
import _ from 'lodash'

export default (colors) => ({
  match: ({ value, key }) => (
    colors && value && key.match(/color/i) && _.has(colors, value)
  ),
  resolve: ({ value, key }) => ({
    [key]: colors[value],
  }),
})
```

The arguments that are passed to `match` and `value` functions:

| Argument                     | Description
| ---                          | ---
| `value`                      | The value of the style prop as it's passed initially (`raddish`, `1`, etc.)
| `key`                        | The key of the style prop (`border`, `color`, etc.)

### Match function

If `match` function returns `true`, the `value` function will be returned from
the resolver and used as the value of the style prop.

### Resolve function

Returns the resolved value to be used as the final prop value.
