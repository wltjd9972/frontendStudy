//컴포넌트 위에 만듣 이유: 컴포넌트가 리렌더링되어도 다시 안만들어짐 = 효율적

const FRUIT = [
  { number: 1, title: "레드향"},
  { number: 2, title: "샤인머스켓"},
  { number: 3, title: "산청딸기"},
  { number: 4, title: "한라봉"},
  { number: 5, title: "사과"},
  { number: 6, title: "애플망고"},
  { number: 7, title: "딸기"},
  { number: 8, title: "천해향"},
  { number: 9, title: "과일선물세트"},
  { number: 10, title: "귤"}
];
export default function MapFruitsPage(){
  //기본 예제
  const aaa = [<div>1 레드향</div>,<div>2 한라봉</div>,<div>3 블루향</div>]

  //실무 백엔드 데이터 예제
  const bbb = FRUIT.map(el => <div>{el.number} {el.title}</div>)

  return(
    <>
      <div>{aaa}</div>
      =================================
      <div>{bbb}</div>
      =================================
      <div>
        {/* 실무에서 쓰는 효율적인 예제 */}
        {FRUIT.map(el => <div>{el.number} {el.title}</div>)}
      </div>
    </>
  )
}