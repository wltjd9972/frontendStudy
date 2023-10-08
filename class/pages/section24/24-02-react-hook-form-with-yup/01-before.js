import { useState } from "react";

export default function Graphql() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setcontents] = useState("");

  const onClickSummit = async () => {};
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangecontents = (event) => {
    setcontents(event.target.value);
  };
  //한줄일 때 ()필요 없음
  return (
    <>
      <div>
        작성자: <input type="text" onChange={onChangeWriter} />
        제목: <input type="text" onChange={onChangeTitle} />
        내용: <input type="text" onChange={onChangecontents} />
        <butto onClick={onClickSummit}>GRPAHQL-API-REQUESTING</butto>
      </div>
    </>
  );
}
