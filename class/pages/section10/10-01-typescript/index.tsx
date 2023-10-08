export default function TypeScriptPage(){
  //타입 추론
  let aaa = "안녕하세요"
  aaa = 3

  //타입 명시
  let bbb: string ="반갑습니다"
  bbb = 10

  // 타입명시가 필요한 상황
  let ccc: number | string = 1000
  ccc = "1000원"

  // 숫자 타입
  let ddd: number = 10
  ddd = "철수"
  
  // 불린타입
  let eee: boolean = true
  eee = false
  eee = "false" // true로 작동함

  //배열타입
  let fff: number[] = [1,2,2,3,3,3,3, "안녕하세요"]
  let ggg: string[] = ["철수", "영희", "훈이", 12]
  let hhh = ["철수", "영희", "훈이", 12] //타입을 추론해서 어떤 타입을 사용하는지 알아보기<!DOCTYPE html>
  
  //객체타입
  interface IProfile{
    name: string
    age: number | string
    school: string
    hobby?: string //있어도 되고 없어도 되는 요소
  }

  const profile: IProfile= {
    name: "철수",
    age: 8,
    school: "다람쥐 초등학교",
    hobby: "수영"
  } 
  profile.name = "훈이"
  profile.age = "8살"
  profile.hobby = "수영"

  //함수 타입
  function add(num1: number, num2: number, unit:string): string{
    return num1 + num2 + unit
  }

  const result = add(1000,2000,"원")
  //add 함수의 리턴은 string타입이기 때문에 result은 string으로 타입추론이 됨

  const add2 = (num1: number, num2: number, unit:string): string => {
    return num1 + num2 + unit
  }

  const result2 = add(1000,2000,"원")

  //any타입
  let qqq: any = "철수" //자바스크립트와 동일
  qqq = 123
  qqq = true

  return
}