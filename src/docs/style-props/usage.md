import Amendable from '../Amendable'

# Usage of style props

 <Amendable marginLeft={-.2} /> introduces a concept of component style props - a
way to style your components via `props` of a primitive component.

```jsx sandbox
render(
  <Box backgroundColor='black' color='white' padding='20px'>
    Box with style props
  </Box>
)
```

Style props just translate it to:
```js
<Box style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
  Box with style props
</Box>
```

Style props allow for easier style merging and passing down to child components,
since you can use the spread syntax `<Box {...props} />` instead of
merging the `style` prop.

There is nothing else to learn - [all CSS props](/docs/style-props/list)
are available to style through component `props`.
