import Overview from './overview.md'
import GettingStarted from './getting-started.md'
import Box from './box.md'
import AmendableProvider from './amendable-provider.md'
import Faq from './faq.md'

import ResolversOverview from './resolvers/overview.md'
import ResolversColors from '../../node_modules/@amendable/colors-docs/README.md'
import ResolversColorsPolished from '../../node_modules/@amendable/colors-polished-docs/README.md'
import ResolversInlineStyles from '../../node_modules/@amendable/inline-styles-docs/README.md'
import ResolversCssStyledComponents from '../../node_modules/@amendable/css-styled-components-docs/README.md'
import ResolversScale from '../../node_modules/@amendable/scale-docs/README.md'
import ResolversFluidScale from '../../node_modules/@amendable/fluid-scale-docs/README.md'
import ResolversBreakpoints from '../../node_modules/@amendable/breakpoints-docs/README.md'
import ResolversSpacingAliases from '../../node_modules/@amendable/spacing-aliases-docs/README.md'
import ResolversExpandStyleShorthands from '../../node_modules/@amendable/expand-style-shorthands-docs/README.md'
import ResolversCreateNew from './resolvers/create-new.md'

export default [
  {
    name: 'Overview',
    slug: 'overview',
    component: Overview,
  },
  {
    name: 'Getting started',
    slug: 'getting-started',
    component: GettingStarted,
  },
  {
    name: 'Resolvers',
    slug: 'resolvers',
    items: [
      {
        name: 'Overview',
        slug: 'resolvers/overview',
        component: ResolversOverview,
      },
      {
        name: 'Colors',
        slug: 'resolvers/colors',
        component: ResolversColors,
      },
      {
        name: 'Colors',
        slug: 'resolvers/colors-polished',
        component: ResolversColorsPolished,
      },
      {
        name: 'Inline styles',
        slug: 'resolvers/inline-styles',
        component: ResolversInlineStyles,
      },
      {
        name: 'CSS Styled components',
        slug: 'resolvers/css-styled-components',
        component: ResolversCssStyledComponents,
      },
      {
        name: 'Scale',
        slug: 'resolvers/scale',
        component: ResolversScale,
      },
      {
        name: 'Fluid scale',
        slug: 'resolvers/fluid-scale',
        component: ResolversFluidScale,
      },
      {
        name: 'Breakpoints',
        slug: 'resolvers/breakpoints',
        component: ResolversBreakpoints,
      },
      {
        name: 'Spacing aliases',
        slug: 'resolvers/spacing-aliases',
        component: ResolversSpacingAliases,
      },
      {
        name: 'Expand style shorthands',
        slug: 'resolvers/expand-style-shorthands',
        component: ResolversExpandStyleShorthands,
      },
      {
        name: 'Create a new resolver',
        slug: 'resolvers/create-new',
        component: ResolversCreateNew,
      },
    ],
  },
  {
    name: '<AmendableProvider />',
    slug: 'amendable-provider',
    component: AmendableProvider,
    isCode: true,
  },
  {
    name: '<Box />',
    slug: 'box',
    component: Box,
    isCode: true,
  },
  {
    name: 'FAQ',
    slug: 'faq',
    component: Faq,
  },
]
