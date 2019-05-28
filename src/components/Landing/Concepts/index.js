import React from 'react'
import Container from '@amendable/core'
import Heading from '../../Heading'
import Text from '../../Text'

import Concept from './Concept'
import ConverterLink from './ConverterLink'
import MoreLink from './MoreLink'
import styleProps from './examples/style-props.txt'
import examples from './examples/index'
import { ReactComponent as CircleIcon } from '../../../assets/circle.svg'
import { ReactComponent as NumbersIcon } from '../../../assets/numbers.svg'

export default ({
  match: {
    params: {
      concept = 'colors',
    },
  },
}) => (
  <Container padding paddingTop={5} limited>
    <Heading level={1} fontWeight700 colorLightGrey>
      Concepts
    </Heading>

    <Concept
      title='Style props & primitives'
      icon={CircleIcon}
      code={styleProps}
      wrapper={(code) => `render(<AmendableProvider resolvers={[inlineStyles()]}>${code}</AmendableProvider>)`}
    >
      Styling components inline makes you develop and refactor faster. Any CSS prop is
      accessible by camelCasing its name as props. Shorthand syntax is
      really useful for Boolean toggles.

      <MoreLink to='/docs/style-props/usage'>
        More
      </MoreLink>
    </Concept>

    <Concept title='Resolvers' code={examples[concept]} icon={NumbersIcon}>
      <Text paddingBottom>
        Ability to convert style values allows you set up app-wide standarts
        for colors, borders, sizes. You can convert:
      </Text>
      <ConverterLink value='colors' current={concept}>
        Colors
      </ConverterLink>
      <ConverterLink value='sizes' current={concept}>
        Sizes
      </ConverterLink>
      <MoreLink to='/docs/resolvers/overview' marginTop={2}>
        Learn more about resolvers
      </MoreLink>
    </Concept>
  </Container>
)
