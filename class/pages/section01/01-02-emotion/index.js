import {MyEmailInput, MyEmail} from "../../../styles/01-02-emotion"

export default function EmotionPage() {
  //js 쓰는 곳

  return(
    <>
      <MyEmail>이메일: </MyEmail>
      <MyEmailInput type="text" />
      <button>클릭하세요!</button>
      <image src="/next.svg"/>
    </>
  )
}