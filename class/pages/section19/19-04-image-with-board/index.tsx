import { gql, useMutation } from "@apollo/client";

import type { ChangeEvent } from "react";
import { useRef, useState } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { CheckVaildationFile } from "../../../src/commons/libraries/vaildationFILE";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const myGraphqlSetting = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUpload(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0]; //배열로 들어오는 이유: <input type="file" multiple={true}/>일 때, 여러개 드래그를 이용하여 저장하기 때문에 기본적으로 배열로 들어옴
    console.log(file);

    const isVaild = CheckVaildationFile(file);
    if (!isVaild) return;

    const result = await uploadFile({ variables: { file } });

    setImageUrl(result.data?.uploadFile.url ?? "");
  };

  const onLClickImage = (): void => {
    // document.getElementById("파일태그ID")?.click();
    fileRef.current?.click();
  };

  // ///////////////////////////////////////////
  const [myFunction] = useMutation(myGraphqlSetting);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setcontents] = useState("");

  const onClickSummit = async (): Promise<void> => {
    const result = await myFunction({
      variables: {
        //variables 가 $의 기능을함
        createBoardInput: {
          writer,
          password: "1234",
          title,
          contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.currentTarget.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const onChangecontents = (event: ChangeEvent<HTMLInputElement>): void => {
    setcontents(event.target.value);
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      제목: <input type="text" onChange={onChangeTitle} />
      내용: <input type="text" onChange={onChangecontents} />
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onLClickImage}
      >
        이미지 선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        multiple={true}
        ref={fileRef}
        accept="image/jpeg,image/png"
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <button onClick={onClickSummit}>GRPAHQL-API-REQUESTING</button>
    </>
  );
}
