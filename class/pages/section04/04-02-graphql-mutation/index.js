import { useMutation, gql } from "@apollo/client"

const myGraphqlSetting = gql`
  mutation{
    createBoard(writer: "sinjjang", title:"hello", contents:"everyone"){
      _id
      number
      message
    }
  }
`

export default function Graphql () {
  const [myFunction] = useMutation(myGraphqlSetting)

  const onClickSummit = async () =>{
    const result =  await myFunction()
    console.log(result)
  }
  //한줄일 때 ()필요 없음
  return <butto onClick={onClickSummit}>GRPAHQL-API-REQUESTING</butto>
  
}