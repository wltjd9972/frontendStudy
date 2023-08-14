import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const myGraphqlSetting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    }
  }
`

export default function Graphql () {
  const [myFunction] = useMutation(myGraphqlSetting)
  const [writer,setWriter] = useState("")
  const [title,setTitle] = useState("")
  const [contents,setcontents] = useState("")

  const onClickSummit = async () =>{
    const result =  await myFunction({
      variables:  {//variables 가 $의 기능을함
        writer: writer,
        title: title,
        contents: contents
        }
      }
    )
  }
  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const onChangecontents = (event) => {
    setcontents(event.target.value)
  }
  //한줄일 때 ()필요 없음
  return (
    <>
      <div>
        작성자: <input type="text" onChange={onChangeWriter} />
        제목: <input type="text" onChange={onChangeTitle} />
        내용: <input type="text" onChange={onChangecontents} />

        <butto onClick={onClickSummit}>GRPAHQL-API-REQUESTING</butto>
      </div>
    </>
  )
  
}