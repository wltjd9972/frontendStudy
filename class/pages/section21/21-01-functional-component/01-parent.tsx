import ChildPage from "./02-child";

export default function ParentPage(): JSX.Element {
  return (
    <>
      <ChildPage count={10} />
      {/* {ChildPage({ count: 10})}  //둘다 결과는 같음*/}
    </>
  );
}
