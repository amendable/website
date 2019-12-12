import React from 'react'
import CodeSandbox from 'react-code-sandbox'
import Box, { AmendableProvider } from '@amendable/core'
import { Link as RouterLink } from 'react-router-dom'
import ErrorBoundary from 'react-error-boundary'
import CandourNormalize from 'candour-normalize'
import fluidScale from '@amendable/fluid-scale'
import colors from '@amendable/colors'
import inlineStyles from '@amendable/inline-styles'
import scale from '@amendable/scale'
import breakpoints from '@amendable/breakpoints'
import spacingAliases from '@amendable/spacing-aliases'
import expandStyleShorthands from '@amendable/expand-style-shorthands'

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
            Box,
            CandourNormalize,
            fluidScale,
            colors,
            inlineStyles,
            scale,
            breakpoints,
            spacingAliases,
            expandStyleShorthands,
          }}
          {...props}
        />
      </ErrorBoundary>
    </AmendableProvider>
  </Box>
)
