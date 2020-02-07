import React from 'react'
import _ from 'lodash'
import { Link as RouterLink } from 'react-router-dom'
import Box from '../../Box'
import Link from '../../Link'

import Items from './Items'

const to = (slug, items) => (
  items.length ? `/docs/${items[0].slug}` : `/docs/${slug}`
)

export default ({
  slug,
  isCode,
  name,
  items = [],
  match: {
    params,
  },
  match,
  level,
  alwaysOpen,
}) => (
  <>
    <Link
      level={level}
      component={RouterLink}
      to={to(slug, items)}
      fontWeight700={params[0] === slug}
      color={params[0] === slug ? 'blue' : 'black'}
      displayBlock
      marginBottom
      fontFamily={isCode ? 'monospace' : 'inherit'}
    >
      {name}
    </Link>

    {!!items.length && (alwaysOpen || _.startsWith(params[0], slug)) && <Box paddingLeft>
      <Items level={level} items={items} match={match} />
    </Box>}
  </>
)
