import React from 'react'
import Box from '@amendable/core'
import Heading from '../../Heading'
import Text from '../../Text'
import CodeWithSandbox from '../../CodeWithSandbox'

export default ({ title, code, icon, children, ...rest }) => (
  <Box paddingTop={5} paddingBottom={5} limited display={{ md: 'flex' }} justifyContentSpaceBetween>
    <Box maxWidth={26} paddingRight={2}>
      {icon && <Box component={icon} height={7} width='initial' paddingBottom fill='blue' />}
      <Heading level={4} fontWeight700 displayFlex alignItemsCenter>
        {title}
      </Heading>
      <Text colorLightBlack paddingTop>
        {children}
      </Text>
    </Box>

    <Box maxWidth={{ md: 25 }} width='100%'>
      <CodeWithSandbox sandbox key={code} {...rest}>
        {code}
      </CodeWithSandbox>
    </Box>
  </Box>
)
