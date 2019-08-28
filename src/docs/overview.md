import Amendable from './Amendable'

# Overview

 <Amendable marginLeft={-.2} /> is a fully configurable inline style system
for React.

**Core features:**
- Nothing to learn [inline style API](/docs/style-props/usage)
- [Redefine](/docs/resolvers/overview) CSS values and
[modify](/docs/theme/modifiers) component styles
- Maintain a consistent component [theme](/docs/theme/base)

```jsx sandbox
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import fluidScale from '@amendable/fluid-scale'
import colors from '@amendable/colors'
import inlineStyles from '@amendable/inline-styles'

render(
  <AmendableProvider
    resolvers={[
      fluidScale(),
      colors({ colors: { aqua: '#66fcd9' } }),
      inlineStyles(),
    ]}
  >
    <Box backgroundColor='aqua' fontWeight={700} padding={2}>
      Amendable
    </Box>
  </AmendableProvider>
)
```

## Why Amendable?

React ecosystem is absolutely thriving. There are many great attempts at
**design systems**, but none are built on
[**inline CSS styles**](/docs/style-props/why-inline-styles) and are
easily **maintainable**.

The goal of <Amendable /> is to enable building powerful design systems through
total configurability.
