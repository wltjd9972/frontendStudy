import { useQuery,gql } from "@apollo/client"

const FETCH_BOARD = gql`
  query{
    fetchBoard(number: 6){
      writer
      title
      contents
    }
  }
`

export default function StaticRouringMovedPage(){
  const { data } = useQuery(FETCH_BOARD)

  console.log(data)

  return (
    <>
      <div>1page moved seccese</div>
      <div>writer: {data && data.fetchBoard.writer}</div>
      <div>title: {data && data.fetchBoard.title}</div>
      <div>content: {data && data.fetchBoard.content}</div>
    </>
  )
}
  
