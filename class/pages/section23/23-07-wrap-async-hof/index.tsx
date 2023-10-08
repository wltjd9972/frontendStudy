import { useMutation, gql } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const myGraphqlSetting = gql`
  mutation {
    createBoard(writer: "sinjjang", title: "hello", contents: "everyone") {
      _id
      number
      message
    }
  }
`;

export default function Graphql(): JSX.Element {
  const [myFunction] = useMutation(myGraphqlSetting);

  const onClickSummit = async (): Promise<void> => {
    const result = await myFunction();
    console.log(result);
  };

  //한줄일 때 ()필요 없음
  return (
    <button onClick={wrapAsync(onClickSummit)}>GRPAHQL-API-REQUESTING</button>
  );
}
