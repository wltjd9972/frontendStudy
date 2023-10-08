import { useMutation } from "@apollo/client"
import { useState } from "react"
import { myGraphqlSetting, UPDATE_BOARD } from "./BoardWrite.queries" //export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter" //export default로 된 함수 한개만 가져오기 파일에 단 한개의 export default함수를 만들 수 있음
import { useRouter } from "next/router"
// import BoardWriteUITest from "./BoardWrite.presenter" //export default는 파일당 한번밖에 못쓰기 때문에 불러올때 이름을 바꾸어도됨 차피 해당하는 함수는 하나이기 때문
// import BoardWriteUITest, {apple} from "./BoardWrite.presenter" //export default와 export 한번에 가져오기

// import * as S from './BoardWrite.styles' //export 한번에 가져오기

export default function BoardWrite(props){
  const router = useRouter();

  const [myFunction] = useMutation(myGraphqlSetting)
  const [updateBoard] = useMutation(UPDATE_BOARD)
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
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`)
  }

  const onClickUpdate = async () => {
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer: writer,
        title: title,
        contents: contents
      }
    });
    router.push(`/setion09/09-03-boards/${result.data.updateBoard.number}`);
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

  return(
    <>
      <BoardWriteUI 
      onClickSummit={onClickSummit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangecontents={onChangecontents}
      isEdit={props.isEdit} />
    </>
  )
}