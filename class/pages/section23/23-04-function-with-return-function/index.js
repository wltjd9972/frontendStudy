//1. 함수를 리턴하는 함수
function aaa() {
  const apple = 10;

  return function () {
    const banana = 20;
    console.log(banana);
    console.log(apple);
  };
}

aaa()();
//aaa()는 aaa함수 실행
//aaa()()는 aaa가 리턴하는 함수 실행
//리터하는 함수 이름은 생략가능

//=================================

//2. 당연히 파라미터도 사용가능함

function bbb(apple) {
  return function (banana) {
    console.log(banana);
    console.log(apple);
  };
}

bbb(100)(500);

//=================================

//3.화살표 함수로 간소화
// () => {} 중 return 사이에 아무것도 없기 떄문에 return을 생략하고 ()사용
// 그 후 ()가 특별한 의미가 없기 떄문에 그냥 생략가능
const ccc = (apple) => (banana) => {
  console.log(banana);
  console.log(apple);
};

ccc(100)(500);

//=================================

//4. 함수를 리턴하는 함수 -인자(파라미터) 늘리기
const ddd = (apple) => (banana) => (tomato) => (orange){
  console.log(banana);
  console.log(apple);
  console.log(tomato)
  console.log(orange)
};

ddd(100)(500);