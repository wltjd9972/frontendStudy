import { useQuery, gql, useMutation } from "@apollo/client";
import type {
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

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: Id!) {
    deleteBoard(boardId: $boardId) {
      message
    }
  }
`;

const myGraphqlSetting = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
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

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [myFunction] = useMutation(myGraphqlSetting);

  interface IPrev {
    __ref: string;
  }

  const onClickDelete = (boardId: string) => (): void => {
    void deleteBoard({
      variables: { boardId },
      // refetchQueries: [{ query: FETCH_BOARDS }] /* 삭제하고 다시 fetch함*/,
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev: IPrev[], { readField }) => {
              const deleteId = data.deleteBoard; // 삭제 완료된 아이디
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deleteId,
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSummit = (): void => {
    void myFunction({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목",
          contents: "내용입니다",
        },
      },
      // refetchQueries: [{query: FETCH_BOARDS}],
      update(cache, { data }) {
        cache.modify({
          fields: {
            // data.createBoard // { writer: " 철수", ...}
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSummit}>등록하기</button>
    </>
  );
}
