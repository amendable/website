import Amendable from './Amendable'

# Box

Box is the only primitive of <Amendable />. The purpose of this component is to
accept the props, resolve them through resolvers and pass the resulting props forward.

```jsx sandbox
import { render } from 'react-dom'
import Box from '@amendable/core'

render(
  <Box component='span'>
    A container
  </Box>
)
```

## Props

`Box` has only one special prop (`component`). The rest of the props are
passed to the underlying `component`.

| Prop                                                                              | Default     | Description                                           |
| -------------                                                                     | --------    | -----                                                 |
| `component`                                                                       | `div`       | Any HTML, React, React Native or a component from other libraries (`div`, `p`, `Link`, etc) |
