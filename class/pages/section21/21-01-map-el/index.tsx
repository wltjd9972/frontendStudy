export default function MapElPage(): JSX.Element {
  //1. 기본 방법
  console.log("1. 기본방법\n");
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log("el: ", el);
    console.log("index: ", index);
  });

  // 2. 매개변수(Parameter)변경
  console.log("2. 매개변수 변경\n");
  ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
    console.log("el: ", asdf);
    console.log("index: ", qwer);
  });

  //3. 함수선언식 방법
  console.log("3. 함수 선언식 방법\n");
  ["철수", "영희", "훈이"].forEach(function (asdf, qwer) {
    console.log("el: ", asdf);
    console.log("index: ", qwer);
  });

  //4. el과 index 바꾸기
  console.log("4. el과 index 바꾸기\n");
  ["철수", "영희", "훈이"].forEach((index, el) => {
    //매개변수랑 변수명이 중요한게 아니라 위치가 중요함 index에 el이 넘어옴
    console.log("el: ", el);
    console.log("index: ", index);
  });

  return <></>;
}
