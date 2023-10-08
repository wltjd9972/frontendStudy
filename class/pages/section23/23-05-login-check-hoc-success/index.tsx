import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../src/commons/types/generated/types";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
function 마이페이지(): JSX.Element {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return <>{data?.fetchUserLoggedIn.name}님 하이용</>;
}

export default withAuth(마이페이지);
