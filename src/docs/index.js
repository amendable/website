import Overview from './overview.md'
import StylePropsUsage from './style-props/usage.md'
import StylePropsList from './style-props/list.md'
import StylePropsWhyInlineStyles from './style-props/why-inline-styles.md'
import ResolversOverview from './resolvers/overview.md'
import ResolversFluidScale from './resolvers/fluid-scale.md'
import ResolversColors from './resolvers/colors.md'
import ResolversCreateNew from './resolvers/create-new.md'
import GettingStarted from './getting-started.md'
import Box from './box.md'
import AmendableProvider from './amendable-provider.md'
import Faq from './faq.md'

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
        name: 'Fluid scale',
        slug: 'resolvers/fluid-scale',
        component: ResolversFluidScale,
      },
      {
        name: 'Colors',
        slug: 'resolvers/colors',
        component: ResolversColors,
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
