import Amendable from './Amendable'

# FAQ

## How to use Amendable with external libraries?

To use [React Router](https://reacttraining.com/react-router/web) with <Amendable />
primitives, you can just pass the router `Link` through the
`component` prop:

```jsx sandbox
import { render } from 'react-dom'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'candour'

render(
  <Link
    component={RouterLink}
    to='/docs/faq'
    textDecorationUnderline
  >
    React router link with Amendable style
  </Link>
)
```
