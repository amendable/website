import Amendable from './Amendable'

# AmendableProvider

`AmendableProvider` is used to set up <Amendable />.

```jsx sandbox
import React from 'react'
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import fluidScale from '@amendable/fluid-scale'
import inlineStyles from '@amendable/inline-styles'

render(
  <AmendableProvider resolvers={[fluidScale(), inlineStyles()]}>
    Your app here

    <Box fontSize={2}>
      Amendable elements will work anywhere inside your app
    </Box>
  </AmendableProvider>,
  document.getElementById('root')
)
```

## Props

`AmendableProvider` has some useful <Amendable />-related props.

| Prop               | Default                                | Description                                                                                        |
| -------------      | --------                               | -----                                                                                              |
| `resolvers`          | `[]`                                   | Check [Overview of resolvers](/docs/resolvers/overview) for available resolvers. |
