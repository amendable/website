import fluidScale from '@amendable/fluid-scale'
import expandStyleShorthands from '@amendable/expand-style-shorthands'
import spacingAliases from '@amendable/spacing-aliases'
import breakpoints from '@amendable/breakpoints'
import amendableColors from '@amendable/colors'
import inlineStyles from '@amendable/inline-styles'
import styleShorthands from '@amendable/style-shorthands'
import colors from './colors'
import borders from './borders'

const collection = ({ match, collection }) => ({
  match,
  resolve: ({ key, value }) => ({
    [key]: collection[value] || value,
  })
})

const trueToOne = (match, config) => ({
  match: ({ value }) => (
    value === true
  ),
  resolve: ({ key }) => ({
    [key]: 1,
  })
})

const modifiers = {
  limited: {
    maxWidth: 62,
    margin: '0 auto',
  },
  tight: {
    letterSpacing: -0.07,
  },
  rounded: {
    borderRadius: '6px',
  },
  readable: {
    maxWidth: '768px',
  },
}

const amendableModifiers = ({
  match = ({ key }) => modifiers[key],
  modifiers,
}) => ({
  match,
  resolve: ({ key, value }) => modifiers[key],
})

const levels = () => ({
  match: ({ key }) => (
    key === 'level'
  ),
  resolve: ({ value }) => ({
    fontSize: [4.5, 2.5, 2, 1.5, 1.25, 1, 0.85, 0.75, 0.65, 0.55][value - 1]
  })
})

export default [
  amendableModifiers({ modifiers }),
  spacingAliases(),
  breakpoints(),
  levels(),
  trueToOne(),
  expandStyleShorthands(),
  styleShorthands(),
  amendableColors({ colors }),
  collection({ match: /border/i, collection: borders }),
  fluidScale(),
  inlineStyles(),
]
