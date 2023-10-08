import { useQuery,gql, useMutation } from "@apollo/client"
import { Fragment } from "react"

const FETCH_BOARDS = gql`
  query{
    fetchBoards{
      number
      title
      contents
    }
  }
`

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int!){
    deleteBoard(number: $number) {
      message
    }
  }
`


export default function StaticRouringMovedPage(){
  const { data } = useQuery(FETCH_BOARDS)

  const [deleteBoard] = useMutation(DELETE_BOARD)
  
  const onClickDelete = (event) => {
    
    deleteBoard({
      variables: {number: Number(event.target.id)}, /*현재 보드의 number을 이용해서 삭제가능 */
      refetchQueries: [{query: FETCH_BOARDS }] /* 삭제하고 다시 fetch함*/
    }) 
  }
  
  return (
    <>
    {/* 특별한 이유가 없으면 fragment로 감싸자! div는 1개더 그려야되서 조금 느려짐*/}
      {data?.fetchBoards.map(el => (
        // 1.프래그먼트란? <></>, <Fragment></Fragment>
        // 2.프래그먼트에 key주는법 <Fragment key={1}></Fragment>
      <div key={el.number}> {/* index는 게시글을 삭제할 대, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨. 즉, 유일하지 않음*/}
        <span>
          <input type="checkbox"/>
        </span>
        <span style={{margin: "10px"}}>{el.number}</span> 
        <span style={{margin: "10px"}}>{el.title}</span> 
        <span style={{margin: "10px"}}>{el.writer}</span>
        <span>
          <button id={el.number} onClick={onClickDelete}>삭제하기</button> {/* 현재 보드의 number값을 가짐*/}
        </span>
        </div>
        ))}
    </>
  )
}
  
