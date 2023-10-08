import { MouseEvent } from "react"

export default function Checkbox () {
  const qqq2 = (event: MouseEvent<HTMLSpanElement>) =>{
    event.stopPropagation() //이벤트 버블링을 강제로 멈춤 
    alert("2번 함수")
  }
  const qqq3 = (event: MouseEvent<HTMLInputElement>) =>{
    alert("3번 함수")
  }
  return(
    <>
      <span onClick={qqq2}>
        <input type="checkbox" onClick={qqq3}/>
      </span>
    </>
  )
}