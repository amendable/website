import React from 'react'
import _ from 'lodash'
import Box from '@amendable/core'
import properties from '@amendable/inline-style-properties'
import { Toggle } from 'libreact/lib/Toggle'

const Button = (props) => (
  <Box
    backgroundColor='#F9FBFC'
    padding={1}
    {...props}
  />
)

const Code = (props) => (
  <Box
    backgroundColor='#F9FBFC'
    padding={1}
    width='100%'
    fontFamily='monospace'
    {...props}
  />
)

export default (props) => (
  <Toggle>
    {({ on, toggle }) => (
      <Box {...props}>
        <Code>
          {_.map(on ? properties : _.take(properties, 5), (prop) => (
            <Box key={prop}>
              {prop}
            </Box>
          ))}
        </Code>

        <Box>
          {on || <Button level={8} onClick={toggle}>Show all ({properties.length})</Button>}
        </Box>
      </Box>
    )}
  </Toggle>
)
