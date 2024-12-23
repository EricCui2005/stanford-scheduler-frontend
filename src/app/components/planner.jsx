import QuarterBlock from './quarterBlock';

export default function Planner() {
  return (
    <>
      <div className="ml-[5vw] flex h-[90vh] w-[90vw]">
        <div className="h-full w-1/4">
          <QuarterBlock title="FRESH FALL" />
          <QuarterBlock title="FRESH WINTER" />
          <QuarterBlock title="FRESH SPRING" />
        </div>
        <div className="åh-full w-1/4">
          <QuarterBlock title="SOPH FALL" />
          <QuarterBlock title="SOPH WINTER" />
          <QuarterBlock title="SOPH SPRING" />
        </div>
        <div className="h-full w-1/4">
          <QuarterBlock title="JUNIOR FALL" />
          <QuarterBlock title="JUNIOR WINTER" />
          <QuarterBlock title="JUNIOR SPRING" />
        </div>
        <div className="h-full w-1/4">
          <QuarterBlock title="SENIOR FALL" />
          <QuarterBlock title="SENIOR WINTER" />
          <QuarterBlock title="SENIOR SPRING" />
        </div>
      </div>
    </>
  );
}
