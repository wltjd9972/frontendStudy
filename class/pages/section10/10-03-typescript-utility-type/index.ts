/* Utility Types는 기존 타입을 변환하여 새로운 타입을 생성하는 데 사용하는 일련의 제네릭 타입들을 말합니다. 
   이들은 코드의 중복을 줄이고, 타입을 더 유연하게 만들며, 타입의 특정 부분만을 조작할 수 있는 강력한 도구로써 작용합니다. */

import { type } from "os"


export interface IProfile {
  name: string
  age: number
  school: string
  hobby?: string
}

//1. Partial Type
//타입 모든 요소를 Ex?: 로 만듬
type aaa = Partial<IProfile>

//2. Required Type 
//모든 요소를 필수 로 만듬
type bbb = Required<IProfile>

//3. pick Type
//필요한 요소만 가져옴
type ccc = Pick<IProfile, "name" | "age">

//4. Omit Type
//필요 없는 요소를 삭제시킴
type ddd = Omit<IProfile , "school">

//5. Reord Type
//Union type에 IProfile 타입을 적용시킴
type eee = "철수" | "영희" | "훈이" //Union type
let child1: string = "사과" // 일반 string type 문자열이기만 하면 상관없음
let chile2: eee = "철수" //철수 영희 훈이만 됨

type fff= Record<eee, IProfile> //Record type

//6. 객체의 key들로 union type 만들기
type ggg= keyof IProfile // "name" | "age" | "school" | "hobby"
let myprofile: ggg = "hobby"

//7. type vs interface 차이 => interface는 선언병합 가능

export interface IProfile {
  candy: number //선언 병합으로 추가됨
}

//8. 배운거 응용
let profile: Partial<IProfile> = {
  candy: 10
}