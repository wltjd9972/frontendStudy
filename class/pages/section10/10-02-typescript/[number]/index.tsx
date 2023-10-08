import { useQuery,gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number){
      number
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

  const onClickMove = () => {
    router.push(`/section10/10-02-typescript-boards/${router.query.number}/edit`)
  }

  return (
    <>
      <div>{router.query.number}page moved seccese</div>
      <div>writer: {data?.fetchBoard?.writer}</div>
      <div>title: {data?.fetchBoard?.title}</div>
      <div>content: {data?.fetchBoard?.contents}</div>
      <button onClick={onClickMove}>수정하기</button>
    </>
  )
}
  
