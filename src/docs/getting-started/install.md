import Amendable from '../Amendable'

# Install

To install the library:
```
yarn add candour
# or
npm install candour --save
```

## Setup

To setup <Amendable />, just wrap your app with `AmendableProvider`.
Here's a simple example with
[Create React App](https://facebook.github.io/create-react-app/):

```jsx sandbox
import React from 'react'
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'

render(
  <AmendableProvider
    resolvers={[
      colors({ colors: { aqua: '#66fcd9' } }),
      inlineStyles(),
    ]}
  >
    Your app here

    <Box color='aqua'>
      Box can be used anywhere in the app
    </Box>
  </AmendableProvider>,
  document.getElementById('root')
)
```
