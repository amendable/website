import Amendable from './Amendable'

# Getting started

To install the library:
```
yarn add @amendable/core
# or
npm install @amendable/core --save
```

## Setup

To setup <Amendable />, just wrap your app with `AmendableProvider`.
Here's a simple example with
[Create React App](https://facebook.github.io/create-react-app/):

```jsx sandbox
import React from 'react'
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import colors from '@amendable/colors'
import inlineStyles from '@amendable/inline-styles'

render(
  <AmendableProvider
    resolvers={[
      colors({ colors: { blue: '#0055ff' } }),
      inlineStyles(),
    ]}
  >
    Your app here

    <Box color='blue'>
      Box can be used anywhere in the app
    </Box>
  </AmendableProvider>,
  document.getElementById('root')
)
```
