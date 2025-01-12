import QuarterBlock from './quarterBlock';
import PlannerColumn from './plannerColumn';
import ClassBlock from './classBlock';
import { useState, useEffect } from 'react';
import { DndContext } from '@dnd-kit/core';
import Draggable from './draggable';
import Droppable from './droppable';

export default function Planner() {
  const [schedule, setSchedule] = useState(null);

  // Function to solve and fetch schedule data
  const fetchData = async () => {
    try {
      const result = await fetch('/api/solve');
      const data = await result.json();
      setSchedule(data['schedule']);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // IDs of droppable areas
  const droppableIds = [
    'BANK',
    'FRESH_FALL',
    'FRESH_WINTER',
    'FRESH_SPRING',
    'SOPH_FALL',
    'SOPH_WINTER',
    'SOPH_SPRING',
    'JUNIOR_FALL',
    'JUNIOR_WINTER',
    'JUNIOR_SPRING',
    'SENIOR_FALL',
    'SENIOR_WINTER',
    'SENIOR_SPRING',
  ];

  // IDs of draggable components
  const draggableIds = ['CS106B', 'CS103', 'CS107', 'CS109'];

  // Internal DND position representation object
  const [blocks, setBlocks] = useState({
    BANK: [],
    FRESH_FALL: ['CS106B'],
    FRESH_WINTER: ['CS107'],
    FRESH_SPRING: [],
    SOPH_FALL: [],
    SOPH_WINTER: [],
    SOPH_SPRING: [],
    JUNIOR_FALL: [],
    JUNIOR_WINTER: [],
    JUNIOR_SPRING: [],
    SENIOR_FALL: [],
    SENIOR_WINTER: [],
    SENIOR_SPRING: [],
  });

  // Function to find the original source container of a draggable component
  const findSourceContainer = (itemId) => {
    const result = Object.keys(blocks).find((blockId) => blocks[blockId].includes(itemId));
    return result;
  };

  // Function to update the droppable areas after a draggable component was dropped
  const handleDragEnd = (event) => {
    const { active, over } = event;

    // Finding source and destination droppable areas
    const sourceArea = findSourceContainer(active.id);
    const destinationArea = over.id;

    // Do nothing if the source and desintation are the same
    if (sourceArea == destinationArea) {
      return;
    }

    if (sourceArea != null && destinationArea != null) {
      setBlocks((prev) => {
        // Removing the component from the source area
        const sourceItems = prev[sourceArea].filter((item) => item !== active.id);

        // Adding the component to the destination area
        const destinationItems = [...prev[destinationArea], active.id];

        // Performing operations
        return {
          ...prev,
          [sourceArea]: sourceItems,
          [destinationArea]: destinationItems,
        };
      });
    }
  };

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <Droppable id={'BANK'}>
          <div className="debug h-48 w-48">
            {blocks['BANK'].map((itemId) => {
              return (
                <Draggable key={itemId} id={itemId}>
                  <ClassBlock completeTitle={itemId} />
                </Draggable>
              );
            })}
          </div>
        </Droppable>
        <button className="btn" onClick={fetchData}>
          Fetch
        </button>

        <div className="ml-[15vw] flex h-[90vh] w-[80vw] gap-1">
          <PlannerColumn>
            <Droppable id={'FRESH_FALL'}>
              <QuarterBlock title="FRESH FALL">
                {schedule &&
                  schedule['FRESH_FALL'].map((completeTitle) => (
                    <ClassBlock key={completeTitle} completeTitle={completeTitle} />
                  ))}
                {blocks['FRESH_FALL'].map((itemId) => {
                  return (
                    <Draggable key={itemId} id={itemId}>
                      <ClassBlock completeTitle={itemId} />
                    </Draggable>
                  );
                })}
              </QuarterBlock>
            </Droppable>
            <Droppable id={'FRESH_WINTER'}>
              <QuarterBlock title="FRESH WINTER">
                {schedule &&
                  schedule['FRESH_WINTER'].map((completeTitle) => (
                    <ClassBlock key={completeTitle} completeTitle={completeTitle} />
                  ))}
                {blocks['FRESH_WINTER'].map((itemId) => {
                  return (
                    <Draggable key={itemId} id={itemId}>
                      <ClassBlock completeTitle={itemId} />
                    </Draggable>
                  );
                })}
              </QuarterBlock>
            </Droppable>
            <Droppable id={'FRESH_SPRING'}>
              <QuarterBlock title="FRESH SPRING">
                {schedule &&
                  schedule['FRESH_SPRING'].map((completeTitle) => (
                    <ClassBlock key={completeTitle} completeTitle={completeTitle} />
                  ))}
              </QuarterBlock>
            </Droppable>
          </PlannerColumn>
          <PlannerColumn>
            <Droppable id="SOPH_FALL">
              <QuarterBlock title="SOPH FALL">
                {schedule &&
                  schedule['SOPH_FALL'].map((completeTitle) => (
                    <ClassBlock key={completeTitle} completeTitle={completeTitle} />
                  ))}
              </QuarterBlock>
            </Droppable>
            <Droppable id="SOPH_WINTER">
              <QuarterBlock title="SOPH WINTER">
                {schedule &&
                  schedule['SOPH_WINTER'].map((completeTitle) => (
                    <ClassBlock key={completeTitle} completeTitle={completeTitle} />
                  ))}
              </QuarterBlock>
            </Droppable>
            <Droppable id="SOPH_SPRING">
              <QuarterBlock title="SOPH SPRING">
                {schedule &&
                  schedule['SOPH_SPRING'].map((completeTitle) => (
                    <ClassBlock key={completeTitle} completeTitle={completeTitle} />
                  ))}
              </QuarterBlock>
            </Droppable>
          </PlannerColumn>
          <PlannerColumn>
            <Droppable id="JUNIOR_FALL">
              <QuarterBlock title="JUNIOR FALL">
                {schedule &&
                  schedule['JUNIOR_FALL'].map((completeTitle) => (
                    <ClassBlock key={completeTitle} completeTitle={completeTitle} />
                  ))}
              </QuarterBlock>
            </Droppable>
            <Droppable id="JUNIOR_WINTER">
              <QuarterBlock title="JUNIOR WINTER">
                {schedule &&
                  schedule['JUNIOR_WINTER'].map((completeTitle) => (
                    <ClassBlock key={completeTitle} completeTitle={completeTitle} />
                  ))}
              </QuarterBlock>
            </Droppable>
            <Droppable id="JUNIOR_SPRING">
              <QuarterBlock title="JUNIOR SPRING">
                {schedule &&
                  schedule['JUNIOR_SPRING'].map((completeTitle) => (
                    <ClassBlock key={completeTitle} completeTitle={completeTitle} />
                  ))}
              </QuarterBlock>
            </Droppable>
          </PlannerColumn>
          <PlannerColumn>
            <Droppable id="SENIOR_FALL">
              <QuarterBlock title="SENIOR FALL">
                {schedule &&
                  schedule['SENIOR_FALL'].map((completeTitle) => (
                    <ClassBlock key={completeTitle} completeTitle={completeTitle} />
                  ))}
              </QuarterBlock>
            </Droppable>
            <Droppable id="SENIOR_WINTER">
              <QuarterBlock title="SENIOR WINTER">
                {schedule &&
                  schedule['SENIOR_WINTER'].map((completeTitle) => (
                    <ClassBlock key={completeTitle} completeTitle={completeTitle} />
                  ))}
              </QuarterBlock>
            </Droppable>
            <Droppable id="SENIOR_SPRING">
              <QuarterBlock title="SENIOR SPRING">
                {schedule &&
                  schedule['SENIOR_SPRING'].map((completeTitle) => (
                    <ClassBlock key={completeTitle} completeTitle={completeTitle} />
                  ))}
              </QuarterBlock>
            </Droppable>
          </PlannerColumn>
        </div>
      </DndContext>
    </>
  );
}
