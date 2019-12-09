import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import _ from 'lodash'
import Box from '@amendable/core'
import Heading from '../../../Heading'
import Text from '../../../Text'
import Code from '../../../Code'
import Link from '../../../Link'
import CodeWithSandbox from '../../../CodeWithSandbox'
import borders from '../../../../theme/borders'

const heading = level => props => <Heading level={level} fontWeight='bold' paddingY={1} {...props} />
const inlineCode = props => (
  <Code display='inline' padding={0} paddingLeft={0.25} paddingRight={0.25} {...props} />
)

const table = props => (
  <Box overflowXAuto marginBottom={2}>
    <Box component='table' {...props} />
  </Box>
)

const th = props => (
  <Text
    component='th'
    padding
    textAlignLeft
    borderBottom={borders.light}
    fontWeight600
    level={3}
    {...props}
  />
)

const td = props => <Box
  component='td'
  padding
  borderBottom={borders.light}
  {...props}
/>

const strong = props => <Text component='strong' fontWeight600 {...props} />
const hr = props => <Box paddingBottom {...props} />

const a = ({ href, ...props }) => {
  if (_.startsWith(href, '/')) {
    return (
      <Link
        component={RouterLink}
        to={href}
        {...props}
      />
    )
  } else {
    return (
      <Link
        component='a'
        href={href}
        target='_blank'
        {...props}
      />
    )
  }
}
const ul = props => <Box component='ul' marginTop={-0.75} paddingBottom {...props} />
const li = props => (
  <Box component='li' displayFlex paddingY={0.25}>
    <Text paddingRight={.5}>-</Text> <Text {...props} />
  </Box>
)

const p = props => <Text marginBottom {...props} />
const blockquote = props => (
  <Box
    marginY={2}
    paddingLeft
    borderLeftBlue
    borderWidth={.5}
    {...props}
  />
)

export default {
  h1: heading(1),
  h2: heading(2),
  h3: heading(3),
  h4: heading(4),
  h5: heading(5),
  h6: heading(6),
  p,
  code: CodeWithSandbox,
  inlineCode,
  table,
  td,
  th,
  strong,
  hr,
  a,
  ul,
  li,
  blockquote,
}
