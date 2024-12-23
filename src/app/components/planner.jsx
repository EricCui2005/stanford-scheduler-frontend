import QuarterBlock from './quarterBlock';
import PlannerColumn from './plannerColumn';

export default function Planner() {
  return (
    <>
      <div className="ml-[5vw] flex h-[90vh] w-[90vw] gap-1">
        <PlannerColumn>
          <QuarterBlock title="FRESH FALL" />
          <QuarterBlock title="FRESH WINTER" />
          <QuarterBlock title="FRESH SPRING" />
        </PlannerColumn>
        <PlannerColumn>
          <QuarterBlock title="SOPH FALL" />
          <QuarterBlock title="SOPH WINTER" />
          <QuarterBlock title="SOPH SPRING" />
        </PlannerColumn>
        <PlannerColumn>
          <QuarterBlock title="JUNIOR FALL" />
          <QuarterBlock title="JUNIOR WINTER" />
          <QuarterBlock title="JUNIOR SPRING" />
        </PlannerColumn>
        <PlannerColumn>
          <QuarterBlock title="SENIOR FALL" />
          <QuarterBlock title="SENIOR WINTER" />
          <QuarterBlock title="SENIOR SPRING" />
        </PlannerColumn>
      </div>
    </>
  );
}
