import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"

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
  const router = useRouter()

  const [myFunction] = useMutation(myGraphqlSetting)

  const onClickSummit = async () =>{

    try{ // try에  있는 내용을 시도하다가 실패하면 다음에 있는 모든 줄을 모두 무시하고, catch에 있는 내용이 실행된다.

      const result =  await myFunction({
        variables:  {//variables 가 $의 기능을함
          writer: "훈이",
          title: "안녕하세요",
          contents: "반갑습니다."
          }
        }
      )
      console.log(result.data.createBoard.number)
      router.push("/05-05-dynamic-routing-board-mutation-moved/" + result.data.createBoard.number)
      router.push.apply(`/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)
    }
    catch(error){
      alert(error.message)
    }

  }
  //한줄일 때 ()필요 없음
  return <butto onClick={onClickSummit}>GRPAHQL-API-REQUESTING</butto>
  
}