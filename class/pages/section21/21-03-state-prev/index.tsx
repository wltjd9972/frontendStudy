import { type MouseEvent, useState } from "react";

export default function CounterStatePage(): JSX.Element {
  const [count, setCount] = useState(0);

  const onClickCountUp = (event: MouseEvent<HTMLButtonElement>): void => {
    //1. 화살표 함수
    // setCount((prev) => prev + 1);

    /*
    2. 함수선언식
    setCount(function(prev){ 
      //로직 추가 가능
      //if(), for() 등등...
      return prev + 1 
    });
    */

    //3.매개변수 바꾸기
    setCount((wqkdwqodqkdoq) => wqkdwqodqkdoq + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>올리기</button>
    </>
  );
}
