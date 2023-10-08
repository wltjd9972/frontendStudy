export default function ChildOwn(props: any): JSX.Element {
  function onClickCountUp(): void {
    props.setCount((prev: number) => prev + 1);
  }

  return (
    <>
      <div>자식의1의 카운트{props.count}</div>
      <button onClick={onClickCountUp}>올리기</button>
    </>
  );
}
