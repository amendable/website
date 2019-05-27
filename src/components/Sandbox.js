import React from 'react'
import CodeSandbox from 'react-code-sandbox'
import Container, { AmendableProvider } from '@amendable/core'
import { Link as RouterLink } from 'react-router-dom'
import ErrorBoundary from 'react-error-boundary'
import {
  useBreakpoints,
} from 'candour'
import CandourNormalize from 'candour-normalize'
import fluidScale from '@amendable/fluid-scale'
import colors from '@amendable/colors'
import inlineStyles from '@amendable/inline-styles'

const Fallback = ({ error }) => (
  <Container colorRed padding={2} whiteSpacePreWrap fontFamilyMonospace>
    {error.toString()}
  </Container>
)

export default props => (
  <Container padding whiteSpaceNormal>
    <AmendableProvider>
      <ErrorBoundary FallbackComponent={Fallback} key={props.children}>
        <CodeSandbox
          imports={{
            React,
            RouterLink,
            AmendableProvider,
            Container,
            CandourNormalize,
            fluidScale,
            colors,
            useBreakpoints,
            inlineStyles,
          }}
          {...props}
        />
      </ErrorBoundary>
    </AmendableProvider>
  </Container>
)
