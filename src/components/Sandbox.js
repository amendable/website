import React from 'react'
import CodeSandbox from 'react-code-sandbox'
import SandboxBox, { AmendableProvider } from '@amendable/core'
import { Link as RouterLink } from 'react-router-dom'
import ErrorBoundary from 'react-error-boundary'
import CandourNormalize from 'candour-normalize'
import fluidScale from '@amendable/fluid-scale'
import colors from '@amendable/colors'
import colorsPolished from '@amendable/colors-polished'
import inlineStyles from '@amendable/inline-styles'
import inlinePropsCss from '@amendable/inline-props-css'
import cssStyledComponents from '@amendable/css-styled-components'
import scale from '@amendable/scale'
import breakpoints from '@amendable/breakpoints'
import breakpointsCss from '@amendable/breakpoints-css'
import spacingAliases from '@amendable/spacing-aliases'
import expandStyleShorthands from '@amendable/expand-style-shorthands'
import Box from './Box'

const Fallback = ({ error }) => (
  <Box colorRed padding={2} whiteSpacePreWrap fontFamilyMonospace>
    {error.toString()}
  </Box>
)

export default props => (
  <Box padding whiteSpaceNormal>
    <AmendableProvider resolvers={[inlineStyles()]}>
      <ErrorBoundary FallbackComponent={Fallback} key={props.children}>
        <CodeSandbox
          imports={{
            React,
            RouterLink,
            Link: RouterLink,
            AmendableProvider,
            Box: SandboxBox,
            CandourNormalize,
            fluidScale,
            colors,
            colorsPolished,
            inlineStyles,
            inlinePropsCss,
            cssStyledComponents,
            scale,
            breakpoints,
            breakpointsCss,
            spacingAliases,
            expandStyleShorthands,
          }}
          {...props}
        />
      </ErrorBoundary>
    </AmendableProvider>
  </Box>
)
