import { useQuery,gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number){
      writer
      title
      contents
    }
  }
`

export default function StaticRouringMovedPage(){
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) }
  })

  console.log(data)

  return (
    <>
      <div>{router.query.number}page moved seccese</div>
      <div>writer: {data?.fetchBoard?.writer}</div>
      <div>title: {data?.fetchBoard?.title}</div>
      <div>content: {data?.fetchBoard?.content}</div>
    </>
  )
}
  
