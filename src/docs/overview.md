import Amendable from './Amendable'

# Overview

 <Amendable marginLeft={-.2} /> allows you to redefine any React component
prop, easily.

- Minimal surface layer (2 new components only), optimized for performance
- Extensible to virtually any use-case
- Typescript support ([coming soon](https://github.com/amendable/core/issues/2))

**Use for design systems:**
- Maintain consistent colors and sizes
- [Redefine](/docs/resolvers/overview) CSS values and easily use them
- Pass component inline style props without worrying they end up as warnings in DOM

**Use for multi-platform development:**
- Resolve the same component one way in web and another way in mobile
- Use the same set of component props in React and in React Native

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
      colors({ colors: { blue: '#0055ff' } }),
      inlineStyles(),
    ]}
  >
    <Box
      backgroundColor='blue'
      color='white'
      fontWeight={700}
      padding={2}
    >
      Amendable
    </Box>
  </AmendableProvider>
)
```

## Why Amendable?

React ecosystem is absolutely thriving. There are many great attempts at
**design systems**, but none are built on
**totally configurable** for production systems and easily **maintainable**.

The goal of <Amendable /> is to enable building powerful design systems through
total configurability.
