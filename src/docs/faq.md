import Amendable from './Amendable'

# FAQ

## How to use Amendable with external libraries?

To use [React Router](https://reacttraining.com/react-router/web) with <Amendable />
primitives, you can just pass the router `Link` through the
`component` prop:

```jsx sandbox
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import Box from '@amendable/core'

render(
  <Box
    component={Link}
    to='/docs/faq'
    textDecoration='underline'
  >
    React router link with Amendable style
  </Box>
)
```
