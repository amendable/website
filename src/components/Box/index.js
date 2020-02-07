import React, { forwardRef } from 'react';
import _ from 'lodash';
import styled from 'styled-components/macro';
import { useAmendable } from '@amendable/core';

const StyledComponent = styled.div((props) => props['data-css']);

export default forwardRef(
  ({ component: Component = 'div', onLongPress, children, ...rest }, ref) => {
    const { css, ...props } = useAmendable({
      ...rest,
    });

    return (
      <StyledComponent
        as={Component}
        ref={ref}
        {...(_.isEmpty(css) ? {} : { 'data-css': css })}
        {...props}
      >
        {children}
      </StyledComponent>
    );
  }
);
