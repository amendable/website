import React from 'react'
import Box from '@amendable/core'

import previous from '../lib/previous'
import next from '../lib/next'
import Link from './Link'

export default (props) => (
  <Box displayFlex paddingTop={2} paddingBottom={2}>
    {previous(props) && <Link label='Previous' item={previous(props)} />}
    {next(props) && <Link label='Next' item={next(props)} marginLeftAuto />}
  </Box>
)
