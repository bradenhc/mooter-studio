import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary.main};
  background-color: transparent;
`;

function HandlerIcon({}, ref) {
  return (
    <IconWrapper ref={ref}>
      <FontAwesomeIcon icon={faMicrochip} size={"2x"} />
    </IconWrapper>
  );
}

export default forwardRef(HandlerIcon);
