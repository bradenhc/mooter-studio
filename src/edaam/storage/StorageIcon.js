import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary.main};
  background-color: transparent;
`;

function StorageIcon({}, ref) {
  return (
    <IconWrapper ref={ref}>
      <FontAwesomeIcon icon={faDatabase} size={"2x"} />
    </IconWrapper>
  );
}

export default forwardRef(StorageIcon);
