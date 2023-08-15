import { RedInput, BlueButton } from "./BoardWrite.styles"

export default function BoardWriteUI(props){

  return (
    <>
        작성자: <RedInput type="text" onChange={props.bbb} />
        제목: <RedInput type="text" onChange={props.ccc} />
        내용: <RedInput type="text" onChange={props.ddd} />
        <BlueButton onClick={props.aaa}>GRPAHQL-API-REQUESTING</BlueButton>
    </>
  )
}

export const apple = 3