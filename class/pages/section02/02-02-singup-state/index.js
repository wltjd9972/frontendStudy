import { useState } from "react"

export default function SignupStatePage(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function onChangeEmail(event){
    // console.log(event)//나의 행동
    // console.log(event.target) //작동된 태그
    // console.log(event.target.value) //작동된 태그에 입력값

    setEmail(event.target.value)
  }

  function onChangePassword(event){
    setPassword(event.target.value)
  }

  function onClickSignup(event){

    // 1. 검증하기
    if(email.includes("@") === false){
      setEmailError("이메일이 옯바르지 않습니다.")
    }
    if(password.includes("") === false){
      setEmailError("비밀번호를 입력해주세요.")
    }else{
      alert("회원가입을 축하합니다!!")
    }
    // 2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수 즉. API)

    //성공알림 보여주기


  }

  return(
    <>
      <div>
        이메일: <input type="text" onChange={onChangeEmail}/>
        <div>{emailError}</div>
        비밀번호: <input type="password"onChange={onChangePassword}/>
        <div>{passwordError}</div>
        <button onClick={onClickSignup}>회원가입</button>
      </div>
    </>
  )
}