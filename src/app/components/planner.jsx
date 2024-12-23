import QuarterBlock from './quarterBlock';
import PlannerColumn from './plannerColumn';
import ClassBlock from './classBlock';
import { useState, useEffect } from 'react';

export default function Planner() {
  const [schedule, setSchedule] = useState(null);

  // Fetching user schedule on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('/api/solve');
        const data = await result.json();
        setSchedule(data['schedule']);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (schedule) {
      console.log(schedule['FRESH']);
    }
  }, [schedule]);

  return (
    <>
      <div className="ml-[15vw] flex h-[90vh] w-[80vw] gap-1">
        <PlannerColumn>
          <QuarterBlock title="FRESH FALL">
            {schedule &&
              schedule['FRESH']['FRESH_FALL'].map((course) => (
                <ClassBlock key={course} code={course} title={course} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="FRESH WINTER">
            {schedule &&
              schedule['FRESH']['FRESH_WINTER'].map((course) => (
                <ClassBlock key={course} code={course} title={course} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="FRESH SPRING">
            {schedule &&
              schedule['FRESH']['FRESH_SPRING'].map((course) => (
                <ClassBlock key={course} code={course} title={course} />
              ))}
          </QuarterBlock>
        </PlannerColumn>
        <PlannerColumn>
          <QuarterBlock title="SOPH FALL">
            {schedule &&
              schedule['SOPH']['SOPH_FALL'].map((course) => (
                <ClassBlock key={course} code={course} title={course} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="SOPH WINTER">
            {schedule &&
              schedule['SOPH']['SOPH_WINTER'].map((course) => (
                <ClassBlock key={course} code={course} title={course} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="SOPH SPRING">
            {schedule &&
              schedule['SOPH']['SOPH_SPRING'].map((course) => (
                <ClassBlock key={course} code={course} title={course} />
              ))}
          </QuarterBlock>
        </PlannerColumn>
        <PlannerColumn>
          <QuarterBlock title="JUNIOR FALL">
            {schedule &&
              schedule['JUNIOR']['JUNIOR_FALL'].map((course) => (
                <ClassBlock key={course} code={course} title={course} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="JUNIOR WINTER">
            {schedule &&
              schedule['JUNIOR']['JUNIOR_WINTER'].map((course) => (
                <ClassBlock key={course} code={course} title={course} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="JUNIOR SPRING">
            {schedule &&
              schedule['JUNIOR']['JUNIOR_SPRING'].map((course) => (
                <ClassBlock key={course} code={course} title={course} />
              ))}
          </QuarterBlock>
        </PlannerColumn>
        <PlannerColumn>
          <QuarterBlock title="SENIOR FALL">
            {schedule &&
              schedule['SENIOR']['SENIOR_FALL'].map((course) => (
                <ClassBlock key={course} code={course} title={course} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="SENIOR WINTER">
            {schedule &&
              schedule['SENIOR']['SENIOR_WINTER'].map((course) => (
                <ClassBlock key={course} code={course} title={course} />
              ))}
          </QuarterBlock>
          <QuarterBlock title="SENIOR SPRING">
            {schedule &&
              schedule['SENIOR']['SENIOR_SPRING'].map((course) => (
                <ClassBlock key={course} code={course} title={course} />
              ))}
          </QuarterBlock>
        </PlannerColumn>
      </div>
    </>
  );
}
