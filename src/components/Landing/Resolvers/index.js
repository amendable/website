import React from 'react'
import Box from '../../Box'
import Heading from '../../Heading'

import Resolver from './Resolver'
import styleProps from './examples/style-props.txt'
import colors from './examples/colors.txt'
import scale from './examples/scale.txt'
import breakpoints from './examples/breakpoints.txt'
import { ReactComponent as CircleIcon } from '../../../assets/circle.svg'
import { ReactComponent as NumbersIcon } from '../../../assets/numbers.svg'
import { ReactComponent as ThemeIcon } from '../../../assets/theme.svg'

export default () => (
  <Box padding paddingTop={5} limited>
    <Heading level={1} fontWeight700 colorLightGrey>
      Resolvers
    </Heading>

    <Resolver
      title='Inline styles'
      subtitle='@amendable/inline-styles'
      version='0.0.8'
      icon={CircleIcon}
      code={styleProps}
      wrapper={(code) => `render(<AmendableProvider resolvers={[inlineStyles()]}>${code}</AmendableProvider>)`}
    >
      Styling components inline makes you develop and refactor faster. Any CSS prop is
      accessible by camelCasing its name as props.
    </Resolver>

    <Resolver
      title='Colors'
      subtitle='@amendable/colors'
      version='0.0.6'
      icon={ThemeIcon}
      code={colors}
      wrapper={(code) => `render(${code})`}
    >
      Ability to convert style values allows you set up app-wide standarts
      for colors, borders, sizes.
    </Resolver>

    <Resolver
      title='Scale'
      subtitle='@amendable/scale'
      version='0.0.3'
      icon={NumbersIcon}
      code={scale}
      wrapper={(code) => `render(${code})`}
    >
      Define a step and use it everywhere in your design system.
    </Resolver>

    <Resolver
      title='Breakpoints'
      subtitle='@amendable/breakpoints'
      version='0.0.3'
      icon={NumbersIcon}
      code={breakpoints}
      wrapper={(code) => `render(${code})`}
    >
      Define breakpoints and make your app responsive. Works with server side
      rendering too.
    </Resolver>
  </Box>
)
