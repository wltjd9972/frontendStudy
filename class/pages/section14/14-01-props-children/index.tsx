import Exaple from "../../../src/components/units/14-props-children-exaple";

export default function PropsChildren(): JSX.Element {
  return (
    <div>
      <div>+++++++++++++파랑 파란색 초록</div>
      <Exaple school="다람쥐초등학교">
        {/*쏙들어가기 떙겨오기 */}
        <div>
          <input type="text" />
          <div>철수임</div>
          <button>클릭</button>
        </div>
      </Exaple>
      <div>+++++++++++++파랑 파란색 초록</div>
    </div>
  );
}
