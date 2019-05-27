import React from 'react'
import Container, { useAmendable } from '@amendable/core'
import {
  useBreakpoints,
} from 'candour'
import Link from '../../Link'

export default ({ href, src, ...rest }) => {
  const { small } = useBreakpoints()
  const { style } = useAmendable({
    component: 'img',
    backgroundSize: 'contain',
    height: small ? 'auto' : 11,
    width: small ? '100%' : 'auto',
    rounded: true,
    boxShadow: '0 3px 10px hsla(0, 0%, 0%, 0.3)',
    ...rest,
  })

  return (
    <Link href={href} target='_blank'>
      <img style={style} src={src} />
    </Link>
  )
}
