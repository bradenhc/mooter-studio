import React from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import EdaamEditor from 'edaam/EdaamEditor';

import Toolbar from './Toolbar';

const BlueprintViewRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.backgrounds.main};
`;

export default function Blueprint() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BlueprintViewRoot>
        <Toolbar />
        <EdaamEditor />
      </BlueprintViewRoot>
    </DndProvider>
  );
}
