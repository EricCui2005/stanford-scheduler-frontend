import QuarterBlock from './quarterBlock';
import PlannerColumn from './plannerColumn';
import ClassBlock from './classBlock';

export default function Planner() {
  return (
    <>
      <div className="ml-[5vw] flex h-[90vh] w-[90vw] gap-1">
        <PlannerColumn>
          <QuarterBlock title="FRESH FALL">
            <ClassBlock code="CS 106B" title="Programming Abstractions" />
            <ClassBlock code="CS 109" title="Probability for CS" />
          </QuarterBlock>
          <QuarterBlock title="FRESH WINTER">
            <ClassBlock code="CS 103" title="Mathematical Foundations of CS" />
            <ClassBlock code="MATH19" title="Calculus" />
          </QuarterBlock>
          <QuarterBlock title="FRESH SPRING">
            <ClassBlock code="MATH20" title="Calculus" />
            <ClassBlock code="CS 107" title="Systems" />
          </QuarterBlock>
        </PlannerColumn>
        <PlannerColumn>
          <QuarterBlock title="SOPH FALL">
            <ClassBlock code="MATH51" title="Linear Algebra" />
            <ClassBlock code="MATH21" title="Calculus" />
          </QuarterBlock>
          <QuarterBlock title="SOPH WINTER">
            <ClassBlock code="CS 161" title="Algorithms" />
            <ClassBlock code="CS51" title="Social Good Studio" />
          </QuarterBlock>
          <QuarterBlock title="SOPH SPRING">
            <ClassBlock code="MATH104" title="Linear Algebra II" />
            <ClassBlock code="CS 107E" title="Systems E" />
          </QuarterBlock>
        </PlannerColumn>
        <PlannerColumn>
          <QuarterBlock title="JUNIOR FALL">
            <ClassBlock code="MATH51" title="Linear Algebra" />
            <ClassBlock code="MATH21" title="Calculus" />
          </QuarterBlock>
          <QuarterBlock title="JUNIOR WINTER">
            <ClassBlock code="CS 161" title="Algorithms" />
            <ClassBlock code="CS51" title="Social Good Studio" />
          </QuarterBlock>
          <QuarterBlock title="JUNIOR SPRING">
            <ClassBlock code="MATH104" title="Linear Algebra II" />
            <ClassBlock code="CS 107E" title="Systems E" />
          </QuarterBlock>
        </PlannerColumn>
        <PlannerColumn>
          <QuarterBlock title="SENIOR FALL">
            <ClassBlock code="MATH51" title="Linear Algebra" />
            <ClassBlock code="MATH21" title="Calculus" />
          </QuarterBlock>
          <QuarterBlock title="SENIOR WINTER">
            <ClassBlock code="CS 161" title="Algorithms" />
            <ClassBlock code="CS51" title="Social Good Studio" />
          </QuarterBlock>
          <QuarterBlock title="SENIOR SPRING">
            <ClassBlock code="MATH104" title="Linear Algebra II" />
            <ClassBlock code="CS 107E" title="Systems E" />
          </QuarterBlock>
        </PlannerColumn>
      </div>
    </>
  );
}
