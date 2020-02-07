import React from 'react'
import Box from '../../Box'
import Heading from '../../Heading'
import Text from '../../Text'
import CodeWithSandbox from '../../CodeWithSandbox'

export default ({ title, subtitle, version, code, icon, children, ...rest }) => (
  <Box paddingTop={5} paddingBottom={5} limited display={{ md: 'flex' }} justifyContentSpaceBetween>
    <Box maxWidth={26} paddingRight={2}>
      {icon && <Box component={icon} height={7} width='initial' paddingBottom fill='transparent-blue' />}
      <Heading level={4} fontWeight700 displayFlex alignItemsCenter>
        {title}
      </Heading>
      <Box fontFamily='monospace' marginTop={0.5}>
        {subtitle}
      </Box>
      <Box>
        <Box
          backgroundColor='transparent-blue'
          color='blue'
          display='inline-flex'
          padding={0.25}
          borderRadius='5px'
          fontFamily='monospace'
          marginTop={0.5}
          fontSize={0.75}
        >
          v{version}
        </Box>
      </Box>
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
