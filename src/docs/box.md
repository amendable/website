import Amendable from './Amendable'

# Box

Box is the only primitive of <Amendable />. The purpose of this component is to
accept the props, resolve them through resolvers and pass the resulting props forward.

```jsx sandbox
import { render } from 'react-dom'
import Box from '@amendable/core'

render(
  <Box backgroundColor='black' color='white' padding='20px'>
    A container
  </Box>
)
```

## Props

`Box` has some useful <Amendable />-related props. The rest of the props are
passed to the underlying `component`.

| Prop                                                                              | Default     | Description                                           |
| -------------                                                                     | --------    | -----                                                 |
| `component`                                                                       | `div`       | Any HTML or React component (`div`, `p`, `Link`, etc) |
