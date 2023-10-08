import { useMutation, gql } from "@apollo/client"
import { IMutation, IMutationCreateBoardArgs } from "../../../src/commons/types/generated/types"

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
  // const [myFunction] = useMutation<결과타입, 변수 타입>(myGraphqlSetting)
  // const [counter, setCounter] = usestate<number>(0)
  const [myFunction] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(myGraphqlSetting)

  const onClickSummit = async () =>{
    const result =  await myFunction({
      variables:  {//variables 가 $의 기능을함
        writer: "훈이",
        title: "안녕하세요",
        contents: "반갑습니다."
        }
      }
    )
    result.data?.createBoard
  }
  //한줄일 때 ()필요 없음
  return <button onClick={onClickSummit}>GRPAHQL-API-REQUESTING</button>
  
}