import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useState } from "react";
import FetchPolicyExample from "../../../src/components/units/22-fetch-policy";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRouringMovedPage(): JSX.Element {
  const [isOpen, SetIsOpen] = useState(false);
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );
  // 1.새로운 컴포넌트 등장시에도 클로벌 스테이트값이 유지 되는지
  const onClickIsOpen = (): void => {
    SetIsOpen((prev) => !prev);
  };

  // 2. 새로운 페이지 이동시에도 글로벌 스테이트값이 유지 되는지
  const onClickMove = (): void => {
    void router.push("/section22/22-01-fetch-policy-moved");
  };

  return (
    <>
      <button onClick={onClickIsOpen}>
        1.버튼을 클릭하면 새로운 컴포넌트가 나타남
      </button>
      {isOpen && <FetchPolicyExample />}
      =================================
      <button onClick={onClickMove}>
        2.버튼을 클릭하면 페이지가 이동됩니다.
      </button>
    </>
  );
}
