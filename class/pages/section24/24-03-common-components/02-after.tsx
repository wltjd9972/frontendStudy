import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.vaildation";
import Input01 from "../../../src/components/commons/inputs/01";
import Button01 from "../../../src/components/commons/buttons/01";

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
        작성자: <Input01 type="text" register={register("writer")} />
        <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
        제목: <Input01 type="text" register={register("title")} />
        <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
        내용: <Input01 type="text" register={register("contents")} />
        <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
        {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
        <Button01 title="등록하기" isActive={formState.isValid} />
      </form>
    </>
  );
}

/*
  <button type="button" onClick={onClickbasket}>장바구니 담기</button>
  <button type="reset">지우기</button>
  <button type="submit">등록하자</button> // 기본값
*/
