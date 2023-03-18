import React from 'react';
import styled from 'styled-components';

import Tooltip from 'shared/styles/tooltip';
import Resource from 'shared/components/DraggableResourceIcon';
import types from 'edaam/types';
import HandlerIcon from 'edaam/handler/HandlerIcon';
import ExternalEventIcon from 'edaam/event/ExternalEventIcon';
import InternalEventIcon from 'edaam/event/InternalEventIcon';
import StorageIcon from 'edaam/storage/StorageIcon';

const resourceTypes = [
  { type: types.ExternalEvent, title: 'External Event', Svg: ExternalEventIcon },
  { type: types.InternalEvent, title: 'Internal Event', Svg: InternalEventIcon },
  { type: types.Handler, title: 'Handler', Svg: HandlerIcon },
  { type: types.Storage, title: 'Storage', Svg: StorageIcon }
];

const Bar = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.backgrounds.light : theme.colors.backgrounds.medium};
  color: ${({ theme }) => theme.colors.fonts.light};
  min-width: 60px;
  flex-shrink: 0;
`;

const Container = styled.div`
  position: relative;
  margin: 5px;

  &:first-child {
    margin-top: 10px;
  }
`;

const StyledResource = styled(Resource)`
  &:hover {
    cursor: move;
  }

  &:focus {
    outline: none;
  }

  &:active {
    cursor: move;
  }
`;

function UtilityBar() {
  return (
    <Bar>
      {resourceTypes.map(({ type, title, Svg }) => (
        <Container key={title}>
          <Tooltip title={title} position="right">
            <StyledResource type={type} Svg={Svg} />
          </Tooltip>
        </Container>
      ))}
    </Bar>
  );
}

export default UtilityBar;
