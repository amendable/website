import Amendable from './Amendable'

# CandourProvider

`CandourProvider` is used to set up <Amendable />.

```jsx sandbox
import React from 'react'
import { render } from 'react-dom'
import { CandourProvider, Text } from 'candour'
import fluidSteps from 'candour-fluid-steps'

const theme = {
  text: {
    base: {
      color: 'gray',
    },
  },
}

render(
  <CandourProvider theme={theme} converters={[fluidSteps()]}>
    Your app here

    <Text fontSize={2}>
      Candour elements will work anywhere inside your app
    </Text>
  </CandourProvider>,
  document.getElementById('root')
)
```

## Props

`CandourProvider` has some useful <Amendable />-related props.

| Prop               | Default                                | Description                                                                                        |
| -------------      | --------                               | -----                                                                                              |
| `theme`            | Default <Amendable /> theme              | Set up the theme                                                                                   |
| `parsers`          | `[]`                                   | Check [Overview of style value parsers](/docs/style-value-parsers/overview) for available parsers. |
| [*parser configs*](/docs/style-value-parsers/overview) |             | Parsers are configured by passing properties to this provider
