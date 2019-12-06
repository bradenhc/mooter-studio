import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Blueboard = styled.div`
  width: 1000px;
  height: 1000px;
  z-index: -1;
`;

function BoardView({ children }, ref) {
  return <Blueboard ref={ref}>{children}</Blueboard>;
}

export default forwardRef(BoardView);
