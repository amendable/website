import Amendable from '../Amendable'

# Container

Container is the most basic primitive of <Amendable />.
Every other primitive builds on this `Container` and passes all the props to
this one.

To stay consistent, it is advisable to use it in places where you'd
otherwise use a `div` or `span` HTML tag.

```jsx sandbox
import { render } from 'react-dom'
import Container from '@amendable/core'

render(
  <Container backgroundColor='black' color='white' padding='20px'>
    A container
  </Container>
)
```

`Container` accepts all CSS properties as camelCased `props`
which then are merged into the `style` property.

From the design rhytmn perspective, it is advised to always use naked sizes -
`padding={2}` and so on instead of specifying `px` or `em`.
They are automatically converted to steps. By doing that,
you will ensure that your whole design will be with a common rhythm.

## Props

`Container` has some useful <Amendable />-related props. The rest of the props are
passed to the underlying `component`.

| Prop                                                                              | Default     | Description                                           |
| -------------                                                                     | --------    | -----                                                 |
| `component`                                                                       | `div`       | Any HTML or React component (`div`, `p`, `Link`, etc) |
