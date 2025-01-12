import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export default function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <div className="debug h-auto w-auto" ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
