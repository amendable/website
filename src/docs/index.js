import Overview from './overview.md'
import StylePropsUsage from './style-props/usage.md'
import StylePropsList from './style-props/list.md'
import StylePropsWhyInlineStyles from './style-props/why-inline-styles.md'
import ResolversOverview from './resolvers/overview.md'
import ResolversFluidScale from './resolvers/fluid-scale.md'
import ResolversColors from './resolvers/colors.md'
import ResolversCreateNew from './resolvers/create-new.md'
import GettingStartedInstall from './getting-started/install.md'
import PrimitivesContainer from './primitives/container.md'
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
    component: GettingStartedInstall,
  },
  {
    name: 'Style props',
    slug: 'style-props',
    items: [
      {
        name: 'Usage',
        slug: 'style-props/usage',
        component: StylePropsUsage,
      },
      {
        name: 'List',
        slug: 'style-props/list',
        component: StylePropsList,
      },
      {
        name: 'Why inline styles',
        slug: 'style-props/why-inline-styles',
        component: StylePropsWhyInlineStyles,
      },
    ],
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
    name: 'AmendableProvider',
    slug: 'amendable-provider',
    component: AmendableProvider,
  },
  {
    name: 'Primitives',
    slug: 'primitives',
    items: [
      {
        name: 'Box',
        slug: 'primitives/box',
        component: PrimitivesContainer,
      },
    ],
  },
  {
    name: 'FAQ',
    slug: 'faq',
    component: Faq,
  },
]
