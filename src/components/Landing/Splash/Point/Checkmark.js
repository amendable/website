import React from 'react'
import Container from '@amendable/core'

import { ReactComponent as CheckmarkIcon } from '../../../../assets/checkmark.svg'

export default () => (
  <Container
    component={CheckmarkIcon}
    width
    height
    fill='aqua'
    marginRight={.3}
  />
)
