import { useMutation, gql } from "@apollo/client"

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

  const onClickSummit = async () =>{
    const result =  await myFunction({
      variables:  {//variables 가 $의 기능을함
        writer: "훈이",
        title: "안녕하세요",
        contents: "반갑습니다."
        }
      }
    )
  }
  //한줄일 때 ()필요 없음
  return <butto onClick={onClickSummit}>GRPAHQL-API-REQUESTING</butto>
  
}