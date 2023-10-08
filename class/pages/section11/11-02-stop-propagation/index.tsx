import { useQuery,gql } from "@apollo/client"
import { MouseEvent } from "react"
import Checkbox from "./checkbox"

const FETCH_BOARDS = gql`
  query{
    fetchBoards{
      writer
      title
      number
    }
  }
`

export default function StaticRouringMovedPage(){
  const { data } = useQuery(FETCH_BOARDS)

  console.log(data?.fetchBoards)

  const qqq1 = (event: MouseEvent<HTMLDivElement>) =>{
    alert("1번 함수")
  }

  const qqq4 = (event: MouseEvent<HTMLSpanElement>) =>{
    alert("4번 함수")
  }
  return (
    <>
      {data?.fetchBoards.map((el: any) => (
      <div id={el.writer} onClick={qqq1}>
        <Checkbox />
        <span style={{margin: "10px"}} onClick={qqq4}>{el.number}</span> 
        <span style={{margin: "10px"}} >{el.title}</span> 
        <span style={{margin: "10px"}}>{el.writer}</span>
        </div>
        ))}
    </>
  )
}
  
