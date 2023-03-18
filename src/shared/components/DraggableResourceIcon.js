import React from 'react';
import { useDrag } from 'react-dnd';

function DraggableResourceIcon({ type, Svg }) {
  const [, drag] = useDrag({
    item: { type },
    begin: () => {
      console.log('Drag starting');
    }
  });
  return <Svg className={''} width={20} height={20} ref={drag} />;
}

export default DraggableResourceIcon;
