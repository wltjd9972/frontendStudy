import { RedInput, BlueButton } from "./BoardWrite.styles"

export default function BoardWriteUI(props){

  return (
    <>
        작성자: <RedInput type="text" onChange={props.onChangeWriter} />
        제목: <RedInput type="text" onChange={props.onChangeTitle} />
        내용: <RedInput type="text" onChange={props.onChangecontents} />
        <BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSummit}>
          {props.isEdit ? "수정" : "등록"}하기
          </BlueButton>
    </>
  )
}
