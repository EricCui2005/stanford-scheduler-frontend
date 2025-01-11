import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <div className="debug m-4 h-24 w-24 p-4" ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
