import { gql, useMutation } from "@apollo/client";

import { useState, type ChangeEvent } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUpload(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0]; //배열로 들어오는 이유: <input type="file" multiple={true}/>일 때, 여러개 드래그를 이용하여 저장하기 때문에 기본적으로 배열로 들어옴
    console.log(file);
    const result = await uploadFile({ variables: { file } });

    setImageUrl(result.data?.uploadFile.url ?? "");
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} multiple={true} />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
