import { useState } from "react";
import ChildOwn from "../../../src/components/units/15-lifting-state-up/Child1";
import ChildTwo from "../../../src/components/units/15-lifting-state-up/Child2";

export default function CounterStatePage(): JSX.Element {
  const [count, setCount] = useState(0);

  function onClickCountUp(): void {
    setCount((prev: number) => prev + 1);
  }

  return (
    <>
      <ChildOwn count={count} setCount={setCount} />
      <div>======================</div>
      <ChildTwo count={count} onClickCountUp={onClickCountUp} />
    </>
  );
}
