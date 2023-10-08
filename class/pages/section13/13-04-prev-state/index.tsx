import { useState } from "react";

export default function CounterStatePage(): JSX.Element {
  const [count, setCount] = useState(0);
  function onClickCountUp(): void {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // 최종 결과 1

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    //최종 결과 5
  }
  // function onClickCountDown() {
  //   setCount(count - 1);
  // }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>올리기</button>
      {/* <button onClick={onClickCountDown}>내리기</button> */}
    </>
  );
}
