import React from 'react'
import { AmendableProvider } from '@amendable/core'

import amendableResolvers from '../../../theme/amendableResolvers'
import Box from '../../Box'
import Text from '../../Text'
import Pagination from './Pagination/index'
import GitHubMeta from './GitHubMeta/index'

import current from './lib/current'
import components from './lib/components'

export default (props) => {
  const CurrentComponent = current(props).component

  return (
    <Box padding paddingX={{ xs: 1, md: 2 }} paddingBottom={6} width='100%'>
      <Text readable>
        <AmendableProvider
          resolvers={amendableResolvers}
        >
          <CurrentComponent components={components} />
        </AmendableProvider>
      </Text>
      <Pagination {...props} />
      <GitHubMeta {...props} />
    </Box>
  )
}
