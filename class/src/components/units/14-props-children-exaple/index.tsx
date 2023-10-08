interface IExapleProps {
  school: string;
  children: JSX.Element;
}

export default function Exaple(props: IExapleProps): JSX.Element {
  return (
    <div>
      <div>안녕하세요 영희 입니다</div>
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>안녕하세요 맹구 입니다</div>
    </div>
  );
}
