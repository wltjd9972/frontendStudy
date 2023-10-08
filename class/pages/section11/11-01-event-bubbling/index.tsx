import { useQuery,gql } from "@apollo/client"
import { MouseEvent } from "react"

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

  const onClickalert = (event: MouseEvent<HTMLDivElement>) =>{
    alert(event?.currentTarget.id+"님이 작성한 글입니다,")
  }

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
      <div id={el.writer} onClick={onClickalert}>
        <span>
          <input type="checkbox"/>
        </span>
        <span style={{margin: "10px"}}>{el.number}</span> 
        <span style={{margin: "10px"}} >{el.title}</span> 
        <span style={{margin: "10px"}}>{el.writer}</span>
        </div>
        ))}
    </>
  )
}
  
