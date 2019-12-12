import Overview from './overview.md'
import ResolversOverview from './resolvers/overview.md'
import ResolversFluidScale from './resolvers/fluid-scale.md'
import ResolversColors from './resolvers/colors.md'
import ResolversCreateNew from './resolvers/create-new.md'
import GettingStarted from './getting-started.md'
import Box from './box.md'
import AmendableProvider from './amendable-provider.md'
import Faq from './faq.md'
import ResolversScale from '../../node_modules/@amendable/scale-docs/README.md'

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
