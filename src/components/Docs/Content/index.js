import React from 'react'
import {
  Container,
  Text,
  useBreakpoints,
} from 'candour'
import { AmendableProvider } from '@amendable/core'

import amendableResolvers from '../../../theme/amendableResolvers'
import Pagination from './Pagination/index'
import GitHubMeta from './GitHubMeta/index'

import current from './lib/current'
import components from './lib/components'

export default (props) => {
  const CurrentComponent = current(props).component
  const { small } = useBreakpoints()

  return (
    <Container padding paddingLeft={small ? 1 : 2} paddingRight={small ? 1 : 2} paddingBottom={6} width='100%'>
      <Text readable>
        <AmendableProvider
          resolvers={amendableResolvers}
        >
          <CurrentComponent components={components} />
        </AmendableProvider>
      </Text>
      <Pagination {...props} />
      <GitHubMeta {...props} />
    </Container>
  )
}
