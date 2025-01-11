import QuarterBlock from './quarterBlock';
import PlannerColumn from './plannerColumn';
import ClassBlock from './classBlock';
import { useState, useEffect } from 'react';

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

  // IDs of droppable and draggable components
  const droppableIds = ['FRESH_FALL', 'FRESH_WINTER', 'FRESH_SPRING'];
  const draggableIds = ['CS106B', 'CS103', 'CS107', 'CS109'];

  const findSourceContainer = (itemId) => {
    const result = Object.keys();
  };

  return (
    <>
      <button className="btn" onClick={fetchData}>
        Fetch
      </button>
      <div className="ml-[15vw] flex h-[90vh] w-[80vw] gap-1">
        <PlannerColumn>
          <QuarterBlock title="FRESH FALL">
            {schedule &&
              schedule['FRESH_FALL'].map((completeTitle) => (
                <ClassBlock key={completeTitle} completeTitle={completeTitle} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="FRESH WINTER">
            {schedule &&
              schedule['FRESH_WINTER'].map((completeTitle) => (
                <ClassBlock key={completeTitle} completeTitle={completeTitle} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="FRESH SPRING">
            {schedule &&
              schedule['FRESH_SPRING'].map((completeTitle) => (
                <ClassBlock key={completeTitle} completeTitle={completeTitle} />
              ))}
          </QuarterBlock>
        </PlannerColumn>
        <PlannerColumn>
          <QuarterBlock title="SOPH FALL">
            {schedule &&
              schedule['SOPH_FALL'].map((completeTitle) => (
                <ClassBlock key={completeTitle} completeTitle={completeTitle} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="SOPH WINTER">
            {schedule &&
              schedule['SOPH_WINTER'].map((completeTitle) => (
                <ClassBlock key={completeTitle} completeTitle={completeTitle} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="SOPH SPRING">
            {schedule &&
              schedule['SOPH_SPRING'].map((completeTitle) => (
                <ClassBlock key={completeTitle} completeTitle={completeTitle} />
              ))}
          </QuarterBlock>
        </PlannerColumn>
        <PlannerColumn>
          <QuarterBlock title="JUNIOR FALL">
            {schedule &&
              schedule['JUNIOR_FALL'].map((completeTitle) => (
                <ClassBlock key={completeTitle} completeTitle={completeTitle} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="JUNIOR WINTER">
            {schedule &&
              schedule['JUNIOR_WINTER'].map((completeTitle) => (
                <ClassBlock key={completeTitle} completeTitle={completeTitle} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="JUNIOR SPRING">
            {schedule &&
              schedule['JUNIOR_SPRING'].map((completeTitle) => (
                <ClassBlock key={completeTitle} completeTitle={completeTitle} />
              ))}
          </QuarterBlock>
        </PlannerColumn>
        <PlannerColumn>
          <QuarterBlock title="SENIOR FALL">
            {schedule &&
              schedule['SENIOR_FALL'].map((completeTitle) => (
                <ClassBlock key={completeTitle} completeTitle={completeTitle} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="SENIOR WINTER">
            {schedule &&
              schedule['SENIOR_WINTER'].map((completeTitle) => (
                <ClassBlock key={completeTitle} completeTitle={completeTitle} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="SENIOR SPRING">
            {schedule &&
              schedule['SENIOR_SPRING'].map((completeTitle) => (
                <ClassBlock key={completeTitle} completeTitle={completeTitle} />
              ))}
          </QuarterBlock>
        </PlannerColumn>
      </div>
    </>
  );
}
