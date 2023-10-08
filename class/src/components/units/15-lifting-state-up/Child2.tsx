export default function ChildTwo(props: any): JSX.Element {
  return (
    <>
      <div>자식의2의 카운트{props.count}</div>
      <button onClick={props.onClickCountUp}>올리기</button>
    </>
  );
}
