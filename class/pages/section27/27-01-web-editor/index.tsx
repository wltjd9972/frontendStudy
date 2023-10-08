// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
// import {Modal} from "antd"

// dynamic import
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditor(): JSX.Element {
  //ReactQuill 만든 사람들이 만든 onChange이므로 event가 안들어옴 대신 value가 들어옴
  const onChangeContents = (value: string): void => {
    console.log(value);
  };

  // useEffect(() => {
  //   async function aaa() {
  //     const { Modal } = await import("antd"); // code-splitting(코드스플릿팅)
  //     Modal.success({ content: "게시글 등록에 성공하였습니다." });
  //   }
  //   void aaa();
  // });

  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd"); // code-splitting(코드스플릿팅)
    Modal.success({ content: "게시글 등록에 성공하였습니다." });
  };

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      작성자: <input type="text" /> <br />
      비밀번호: <input type="password" /> <br />
      제목: <input type="text" /> <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <button>등록하기</button>
    </form>
  );
}
