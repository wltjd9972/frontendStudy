import { useQuery, gql } from "@apollo/client";
import type {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRouringMovedPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );

  const onClickBastket = (basket: IBoard) => () => {
    // 1. 기존 장바구니 가져오기
    const baskets: IBoard[] = JSON.parse(
      localStorage.getItem("baskets") ?? "[]",
    ); // 로컬스토리지에 baskets이 있으면 추가하고 없으면 "[]"추가

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length >= 1) {
      alert("이미 담으신 물품입니다!");
      return;
    }
    // 3. 내가 클릭한거 추가하기
    baskets.push(basket);

    //4. 추가된 장바구니
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  //만약 장바구니 페이지에서 가져오기도 만들고 싶다면...?
  // localStorage.getItem() => 프리랜더링 오류
  // 이때는 useEffect사용

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickBastket(el)}>장바구니 담기</button>
        </div>
      ))}
    </>
  );
}
