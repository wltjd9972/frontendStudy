import { RedInput, BlueButton } from "./BoardWrite.styles"

export default function BoardWriteUI(props){

  return (
    <>
        작성자: <RedInput type="text" onChange={props.onChangeWriter} />
        제목: <RedInput type="text" onChange={props.onChangeTitle} />
        내용: <RedInput type="text" onChange={props.onChangecontents} />
        <BlueButton 
          onClick={props.onClickSummit} 
          isActive={props.isActive}>
          GRPAHQL-API-REQUESTING
          </BlueButton>
    </>
  )
}

export const apple = 3