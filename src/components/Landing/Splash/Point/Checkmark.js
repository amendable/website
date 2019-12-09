import React from 'react'
import Box from '@amendable/core'

import { ReactComponent as CheckmarkIcon } from '../../../../assets/checkmark.svg'

export default () => (
  <Box
    component={CheckmarkIcon}
    width
    height
    fill='blue'
    marginRight={.3}
  />
)
