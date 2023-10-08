import React, { useState } from "react";
import { Rate } from "antd";

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);

  /*
    ===1단계 방식===
    const onChangeStar = (value: number): void =>{
      setValue(value);
    }
  */

  /* 
    {} 와 return 사이에 아무것도 없으면 ()로 해도됨 
    const onChangeStar = (value: number): void => (setValue(value))
    여기서 ()가 특별한 의미가 없기 때문에 2단계 처럼 생략이됨
  */

  /*===2단계 방식===*/
  // const onChangeStar = (value) => setValue(value);

  return (
    // <Rate onChange={onChangeStar} value={value} /> //1단계 방식
    // <Rate onChange={onChangeStar} value={value} /> // 2단계방식
    // <Rate onChange={(value) => setValue(value)} value={value} /> //3단계 방식
    <Rate onChange={setValue} value={value} /> //4단계 방식
  );
  //여기의 onChange는 HTML의 onChange가 아니라 antd개발자가 만든 onChange라 다름 따라서 event도 발생하지 않음
}
