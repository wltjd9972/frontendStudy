import { useForm } from "react-hook-form";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}

export default function Graphql(): JSX.Element {
  const { register, handleSubmit } = useForm<IFormData>();

  const onClickSummit = (data: IFormData): void => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={wrapAsync(handleSubmit(onClickSummit))}>
        작성자: <input type="text" {...register("writer")} />
        제목: <input type="text" {...register("title")} />
        내용: <input type="text" {...register("contents")} />
        주소: <input type="text" {...register("boardAddress.addressDetail")} />
        <button type="submit">GRPAHQL-API-REQUESTING</button>
      </form>
    </>
  );
}

/*
  <button type="button" onClick={onClickbasket}>장바구니 담기</button>
  <button type="reset">지우기</button>
  <button type="submit">등록하자</button> // 기본값
*/
