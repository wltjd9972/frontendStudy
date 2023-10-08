
import { useQuery,gql } from "@apollo/client"
import { useRouter } from "next/router"
import { IQuery, IQueryFetchBoardArgs } from "../../../src/commons/types/generated/types"

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

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { number: Number(router.query.qqq) }
  })

  console.log(data)

  return (
    <>
      <div>{router.query.qqq}page moved seccese</div>
      <div>writer: {data?.fetchBoard?.writer}</div>
      <div>title: {data?.fetchBoard?.title}</div>
      <div>content: {data?.fetchBoard?.contents}</div>
    </>
  )
}
  
