import Amendable from '../Amendable'

# Colors

Colors converter is helpful when you want to define app-wide color theme and
reuse them easily.

## Usage

```jsx sandbox
import { render } from 'react-dom'
import Container, { AmendableProvider } from '@amendable/core'
import colors from '@amendable/colors'
import inlineStyles from '@amendable/inline-styles'

render(
  <AmendableProvider
    resolvers={[
      colors({ colors: { raddish: '#D41E5C', red: '#F5BCCF' } }),
      inlineStyles(),
    ]}
  >
    <Container color='raddish' backgroundColor='red'>
      Raddish color
    </Container>
  </AmendableProvider>
)
```

> **Note**

> You can both create your own color names or redefine existing CSS colors
(like `red`, `blue`, etc.)

## Supported props

```
color
backgroundColor
borderColor
// ...and anything else that matches /color/i
```
