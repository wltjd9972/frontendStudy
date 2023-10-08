import { useMutation } from "@apollo/client"
import { ChangeEvent, useState} from "react"
import { myGraphqlSetting, UPDATE_BOARD } from "./BoardWrite.queries" //export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter" //export default로 된 함수 한개만 가져오기 파일에 단 한개의 export default함수를 만들 수 있음
import { useRouter } from "next/router"
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types"
// import BoardWriteUITest from "./BoardWrite.presenter" //export default는 파일당 한번밖에 못쓰기 때문에 불러올때 이름을 바꾸어도됨 차피 해당하는 함수는 하나이기 때문
// import BoardWriteUITest, {apple} from "./BoardWrite.presenter" //export default와 export 한번에 가져오기

// import * as S from './BoardWrite.styles' //export 한번에 가져오기



export default function BoardWrite(props: IBoardWriteProps){
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
    router.push(`/section10/10-02-typescript-boards/${result.data.createBoard.number}`)
  }

  const onClickUpdate = async () => {

    const myVariables: IMyVariables = { number: Number(router.query.number)}
    if(title) myVariables.title = title // title이 있으면 myVariables에 추가하기
    if(writer) myVariables.writer = writer // writer이 있으면 myVariables에 추가하기
    if(contents) myVariables.contents = contents // contents이 있으면 myVariables에 추가하기

    // 입력된 부분만 수정하여 보내기
    // 수정하기가 가장 어렵고 힘든 만큼 면접 볼때 자세히 보니까 열심히 공부하기


    const result = await updateBoard({
      variables: myVariables
    });

    router.push(`/section10/10-02-typescript-boards/${result.data.updateBoard.number}`);
  }

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value)
  }

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const onChangecontents = (event: ChangeEvent<HTMLInputElement>) => {
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
      isEdit={props.isEdit} 
      data={props.data} //undefined or data
      />
    </>
  )
}