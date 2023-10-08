import { useQuery,gql } from "@apollo/client"

const FETCH_BOARDS = gql`
  query{
    fetchBoards{
      writer
      title
      contents
    }
  }
`

export default function StaticRouringMovedPage(){
  const { data } = useQuery(FETCH_BOARDS)

  console.log(data?.fetchBoards)

  return (
    <>
      {data?.fetchBoards.map(el => (
      <div>
        <span>
          <input type="checkbox"/>
        </span>
        <span style={{margin: "10px"}}>{el.number}</span> 
        <span style={{margin: "10px"}}>{el.title}</span> 
        <span style={{margin: "10px"}}>{el.writer}</span>
        </div>
        ))}
    </>
  )
}
  
