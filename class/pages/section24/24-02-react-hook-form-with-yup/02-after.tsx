import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.vaildation";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  // boardAddress: {
  //   addressDetail: string;
  // };
}

export default function Graphql(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSummit = (data: IFormData): void => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={wrapFormAsync(handleSubmit(onClickSummit))}>
        작성자: <input type="text" {...register("writer")} />
        <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
        제목: <input type="text" {...register("title")} />
        <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
        내용: <input type="text" {...register("contents")} />
        <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
        {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
        <button
          style={{ backgroundColor: formState.isValid ? "yellow" : "" }}
          type="submit"
        >
          GRPAHQL-API-REQUESTING
        </button>
      </form>
    </>
  );
}

/*
  <button type="button" onClick={onClickbasket}>장바구니 담기</button>
  <button type="reset">지우기</button>
  <button type="submit">등록하자</button> // 기본값
*/
