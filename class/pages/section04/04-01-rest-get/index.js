import axios from "axios"

export default function RestGetPage() {
  function onClickAsync(){
    const result = axios.get("https://koreanjson.com/posts/1")
    console.log(result) //promise
  } 

  
  // async function onClickSync(){
  //   const result = await axios.get("https://koreanjson.com/posts/1") => 함수 중복 선언 문제
  //   console.log(result) //잘 작동함
  // }

  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log(result) //잘 작동함
  }

  return(
    
    <div>
      <button onClick={onClickAsync}>REST-API(비동기)</button>
      <button onClick={onClickSync}>REST-API(동기)</button>
    </div>
  )
}